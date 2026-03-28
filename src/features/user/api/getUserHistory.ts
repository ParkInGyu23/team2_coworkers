import httpClient from '@/shared/api/httpClient';
import { GetUserHistoryResponse } from '../model/dto/user.dto';

export const getUserHistory = async (): Promise<GetUserHistoryResponse> => {
  const response = await httpClient.get<GetUserHistoryResponse>(`/user/history`);
  return response.data;
};
