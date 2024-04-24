import axios, { AxiosError } from 'axios';

import apiClient, { postRequest } from '@/libs/axios';
import { PostCreateStoreBody, GetNoticesParams, PostSignInBody, PostSignupBody } from '@/types/api';

export async function postSignUpInfo({ email, password, confirmPassword, type }: PostSignupBody) {
  const { data } = await apiClient.post('/users', { email, password, confirmPassword, type });
  return data;
}

export async function postSignIn({ email, password }: PostSignInBody) {
  const { data } = await apiClient.post('/token', { email, password });
  return data;
}

// export const getNotices = async ({
//   offset = 0,
//   limit = 6,
//   address,
//   keyword,
//   startsAtGte,
//   hourlyPayGte,
//   sort,
// }: GetNoticesParams) => {
//   const { data } = await apiClient.get('/notices', {
//     params: {
//       offset,
//       limit,
//       address,
//       keyword,
//       startsAtGte,
//       hourlyPayGte,
//       sort,
//     },
//   });
//   return data;
// };

// export const getNotices = async (params: GetNoticesParams) => {
//   const { data } = await apiClient.get('/notices', {
//     params: { ...params, limit: 6 },
//   });
//   return data;
// };

export const getNotices = async ({ offset, limit, address, startsAtGte, hourlyPayGte }: GetNoticesParams) => {
  const params = new URLSearchParams();
  if (offset) {
    params.append('offset', offset.toString());
  }

  if (limit) {
    params.append('limit', limit.toString());
  }

  if (address.length !== 0) {
    address.forEach((v) => {
      params.append('address', v);
    });
  }
  if (startsAtGte !== '') {
    params.append('startsAtGte', startsAtGte.toString());
  }

  if (hourlyPayGte !== 0) {
    params.append('hourlyPayGte', hourlyPayGte.toString());
  }

  console.log(params.getAll('address'));

  const { data } = await apiClient.get('/notices', { params });
  return data;
};

export const getPersonalNotices = async () => {
  const { data } = await apiClient.get('/notices');
  return data;
};

// S3이미지 업로드
export const uploadImageToS3 = async (url: string, file: File) => axios.put(url, file);

// eslint-disable-next-line consistent-return
export const requestUploadImg = async (file: File) => {
  try {
    const { data } = await postRequest.post('/images', { name: file.name });
    const slicePresignedURL: string = data.item.url.slice(0, data.item.url.indexOf('?'));
    await uploadImageToS3(data.item.url, file);
    return slicePresignedURL;
  } catch (error) {
    if (error instanceof AxiosError) {
      const errorMessage = error.response?.data.message;
      throw new Error(errorMessage);
    }
  }
};

export const postCreateStore = async (formData: PostCreateStoreBody) => {
  const { data } = await postRequest.post('/shops', formData);
  return data;
};
