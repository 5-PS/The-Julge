'use client';

import { useForm } from 'react-hook-form';

import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

import Button from '@/components/button/button';
import Input from '@/components/input/input';
import { postSignIn } from '@/services/api';

interface FieldValues {
  email: string;
  password: string;
}

const EMAIL_REGEX = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[a-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;

const FORM_FIELDS = [
  {
    name: 'email',
    id: 'email',
    label: '이메일',
    type: 'text',
    placeholder: '이메일을 입력해주세요.',
    validation: {
      required: '이메일을 입력해주세요.',
      pattern: {
        value: EMAIL_REGEX,
        message: '올바른 이메일 주소가 아닙니다.',
      },
    },
  },
  {
    name: 'password',
    id: 'password',
    label: '비밀번호',
    type: 'password',
    placeholder: '비밀번호를 입력해주세요.',
    validation: {
      required: '비밀번호를 입력해주세요.',
    },
  },
];

export default function SignInForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({ mode: 'all' });

  const onSubmit = async (data: FieldValues) => {
    try {
      await postSignIn(data);

      router.push('/');
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 404) {
          alert(error.response.data.message);
        } else {
          alert('로그인에 실패했습니다.');
        }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-[350px] gap-7">
      {FORM_FIELDS.map(({ name, id, label, type, placeholder, validation }) => (
        <Input
          key={name}
          id={id}
          label={label}
          type={type}
          errorMessage={errors[name as keyof FieldValues]?.message}
          placeholder={placeholder}
          {...register(name as keyof FieldValues, validation)}
        />
      ))}
      <Button background="bg-primary" fontSize={16} height={48}>
        로그인 하기
      </Button>
    </form>
  );
}
