import { UserDto } from './user.dto';

export type TaskDto = {
  id: number;
  name: string;
  description?: string | null;
  date?: string | null;
  frequency?: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'ONCE' | null;
  recurringId?: number | null;
  displayIndex: number;
  commentCount: number;
  doneAt?: string | null;
  deletedAt?: string | null;
  createdAt: string;
  updatedAt: string;
  writer: UserDto;
  doneBy?: {
    user: UserDto;
  } | null;
};

export type TaskListDto = {
  id: number;
  name: string;
  displayIndex: number;
  groupId: number;
  createdAt: string;
  updatedAt: string;
  tasks: TaskDto[];
};