import axiosInstance from '@/shared/api/axiosInstance';
import type { Task, TaskList } from '../types/task';
import type { TaskDto, TaskListDto } from '../types/dto/task.dto';
import { toTask, toTaskList } from '../lib/mappers/task.mapper';

export interface GetTaskListParams {
  teamId: number;
  groupId: number;
  taskListId: number;
  date?: string;
}

export interface CreateTaskRequest {
  teamId: number;
  groupId: number;
  taskListId: number;
  name: string;
  description?: string;
  date?: string;
  frequency?: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'ONCE';
}

export interface UpdateTaskRequest {
  taskId: number;
  name?: string;
  description?: string;
  date?: string;
  frequency?: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'ONCE';
}

export async function getTaskList({
  teamId,
  groupId,
  taskListId,
  date,
}: GetTaskListParams): Promise<TaskList> {
  const { data } = await axiosInstance.get<TaskListDto>(
    `/${teamId}/groups/${groupId}/task-lists/${taskListId}`,
    {
      params: {
        date,
      },
    },
  );
  return toTaskList(data);
}

export async function createTask({
  teamId,
  groupId,
  taskListId,
  ...payload
}: CreateTaskRequest): Promise<Task> {
  const { data } = await axiosInstance.post<TaskDto>(
    `/${teamId}/groups/${groupId}/task-lists/${taskListId}/tasks`,
    payload,
  );

  return toTask(data);
}

export async function updateTask({ taskId, ...payload }: UpdateTaskRequest): Promise<Task> {
  const { data } = await axiosInstance.patch<TaskDto>(`/tasks/${taskId}`, payload);

  return toTask(data);
}

export async function deleteTask(taskId: number): Promise<void> {
  await axiosInstance.delete(`/tasks/${taskId}`);
}

export async function completeTask(taskId: number, done: boolean): Promise<void> {
  await axiosInstance.patch(`/tasks/${taskId}/complete`, {
    done,
  });
}
