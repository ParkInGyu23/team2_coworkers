import type { Role } from '../types/role.type';

export interface User {
  id: number;
  teamId: string;
  email: string;
  nickname: string;
  imageUrl?: string; // image(null) -> imageUrl(undefined) 로 변경
  createdAt: string;
  updatedAt: string;
}

export interface MembershipGroup {
  id: number;
  teamId: string;
  name: string;
  imageUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Membership {
  userId: number;
  groupId: number;
  userName: string;
  userEmail: string;
  userImageUrl?: string;
  role: Role;
  group: MembershipGroup;
}

// [GET] /{teamId}/user 최종 형태
export interface UserProfile extends User {
  memberships: Membership[];
}
