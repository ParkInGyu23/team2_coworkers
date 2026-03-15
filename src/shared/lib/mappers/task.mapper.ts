import type { UserDto } from '@/shared/types/dto/user.dto';
import type { TaskDto, TaskListDto } from '@/shared/types/dto/task.dto';
import type { Task, TaskList } from '@/shared/types/task';
import type { User } from '@/shared/types/user';

export const toUser = (dto: UserDto): User => ({
  id: dto.id,
  nickname: dto.nickname,
  imageUrl: dto.image ?? undefined,
});

export const toTask = (dto: TaskDto): Task => ({
  id: dto.id,
  title: dto.name,
  description: dto.description ?? undefined,
  order: dto.displayIndex,
  commentCount: dto.commentCount,
  writer: toUser(dto.writer),
  completedBy: dto.doneBy?.user ? toUser(dto.doneBy.user) : undefined,
  completedAt: dto.doneAt ?? undefined,
  isDeleted: Boolean(dto.deletedAt),
  date: dto.date ?? undefined,
  recurrence: dto.frequency ?? undefined,
  recurrenceId: dto.recurringId ?? undefined,
});

export const toTaskList = (dto: TaskListDto): TaskList => ({
  id: dto.id,
  groupId: dto.groupId,
  title: dto.name,
  order: dto.displayIndex,
  createdAt: dto.createdAt,
  updatedAt: dto.updatedAt,
  tasks: dto.tasks.map(toTask),
});
