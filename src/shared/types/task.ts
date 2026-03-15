import { User } from "./user";

export type Task = {
  id: number;
  title: string;
  description?: string;
  order: number;
  commentCount: number;
  writer: User;
  completedBy?: User;
  completedAt?: string;
  isDeleted: boolean;
  date?: string;
  recurrence?: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'ONCE';
  recurrenceId?: number;
};

export type TaskList = {
  id: number;
  groupId: number;
  title: string;
  order: number;
  createdAt: string;
  updatedAt: string;
  tasks: Task[];
};