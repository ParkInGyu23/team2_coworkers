import type {
  UserDto,
  MembershipDto,
  MembershipGroupDto,
  GetUserResponse,
} from '../../model/dto/user.dto';
import type {
  User,
  Membership,
  MembershipGroup,
  UserProfile,
} from '../../model/entities/user.model';

// 기본 유저 매퍼
export const toUser = (dto: UserDto): User => ({
  id: dto.id,
  teamId: dto.teamId,
  email: dto.email,
  nickname: dto.nickname,
  imageUrl: dto.image ?? undefined,
  createdAt: dto.createdAt,
  updatedAt: dto.updatedAt,
});

// 그룹(소속)
export const toMembershipGroup = (dto: MembershipGroupDto): MembershipGroup => ({
  id: dto.id,
  teamId: dto.teamId,
  name: dto.name,
  imageUrl: dto.image ?? undefined,
  createdAt: dto.createdAt,
  updatedAt: dto.updatedAt,
});

// 멤버
export const toMembership = (dto: MembershipDto): Membership => ({
  userId: dto.userId,
  groupId: dto.groupId,
  userName: dto.userName,
  userEmail: dto.userEmail,
  userImageUrl: dto.userImage ?? undefined,
  role: dto.role,
  group: toMembershipGroup(dto.group),
});

// 최종 프로필 응답
export const toUserProfile = (dto: GetUserResponse): UserProfile => ({
  ...toUser(dto), // 유저 기본 정보 복사
  memberships: dto.memberships.map(toMembership),
});
