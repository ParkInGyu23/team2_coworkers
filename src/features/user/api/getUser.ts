import { clientFetcher } from '@/shared/lib/axios/client-fetcher';
import { toUserProfile } from '../lib/mappers/user.mapper';
import type { GetUserResponse } from '../model/dto/user.dto';
import type { UserProfile } from '../model/entities/user.model';

export interface GetUserParams {
  teamId: string;
}

export async function getUser({ teamId }: GetUserParams): Promise<UserProfile> {
  // 베이스 주소에 팀 ID 넣기로 해서 제외
  const { data } = await clientFetcher.get<GetUserResponse>(`/user`);
  return toUserProfile(data);
}
