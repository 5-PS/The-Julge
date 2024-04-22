import apiClient from '@/libs/axios';
import { PostSignInBody, PostSignupBody } from '@/types/api';

export async function postSignUpInfo({ email, password, password_repeat }: PostSignupBody) {
  const response = await apiClient.post('/users', { email, password, password_repeat });
  return response.data;
}

export async function postSignIn({ email, password }: PostSignInBody) {
  const response = await apiClient.post('/token', { email, password });
  return response.data;
}

export const getNotices = async () => {
  const { data } = await apiClient.get('/notices');
  return data;
};
