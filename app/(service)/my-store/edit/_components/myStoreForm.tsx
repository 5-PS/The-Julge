'use client';

import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

import Image from 'next/image';

import Button from '@/components/button/button';
import Input from '@/components/input/input';
import SelectInput from '@/components/input/selectInput';

// 2. SelectInput에 이름 props로 넘겨주기
// 3. SelectInput의 옵션 메뉴 position absolute 주기

export default function MyStoreForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({ mode: 'all' });
  const [imageSrc, setImageSrc] = useState<any>(null);

  const handleUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImageSrc(reader.result);
      };
    }
  };
  const onSubmit = () => {
    // TODO: submit함수 구현
  };
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <div className="flex flex-col gap-6 mb-6 md:mb-8">
        <div className="flex flex-col gap-5 md:flex-row">
          <Input
            label="가게 이름*"
            type="text"
            errorMessage={errors.storeName?.message}
            placeholder="가게 이름을 적어주세요."
            {...register('storeName', {
              required: '가게 이름을 적어주세요',
            })}
          />
          <SelectInput />
        </div>
        <div className="flex flex-col gap-5 md:flex-row">
          <SelectInput />
          <Input
            label="상세 주소*"
            type="text"
            errorMessage={errors.detailAddress?.message}
            placeholder="주소를 입력해 주세요."
            {...register('detailAddress', {
              required: '상세 주소를 입력해주세요',
            })}
          />
        </div>
        <div className="w-full md:max-w-[330px]">
          <Input label="기본 시급*" type="number" rightText="원" />
        </div>
        <div className="w-full md:w-[483px]">
          <p className="mb-2">가게 이미지</p>
          <label
            htmlFor="image-input"
            className={`flex flex-col gap-3 font-bold text-gray-40 w-full max-w-[375px] h-[201px] md:max-w-full md:h-[276px] bg-gray-10 border  ${!imageSrc && 'border-gray-20 '}  rounded-xl justify-center items-center cursor-pointer relative overflow-hidden`}
          >
            <div className="inline-flex flex-col items-center gap-3">
              <Image src="/icons/image-add-icon.svg" width={32} height={32} alt="사진 추가 아이콘" />
              이미지 선택
              <input
                type="file"
                id="image-input"
                className="invisible w-0 h-0"
                {...register('imageFile', {
                  onChange: handleUploadImage,
                })}
              />
            </div>
            {imageSrc && <Image src={imageSrc} fill alt="미리보기 이미지" />}
          </label>
        </div>
        <label htmlFor="store-description">
          <p className="mb-2">가게 설명 </p>
          <textarea
            id="store-description"
            className="w-full h-[153px] rounded-[6px] px-5 py-4 border border-gray-30"
            {...register('storeDescription')}
          />
        </label>
      </div>
      <div className="flex justify-center ">
        <div className="w-full md:w-[312px]">
          <Button fontSize={16} background="bg-primary" height={48}>
            등록하기
          </Button>
        </div>
      </div>
    </form>
  );
}
