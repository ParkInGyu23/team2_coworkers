import { useQuery } from "@tanstack/react-query";
import { getTaskList, GetTaskListParams } from "../api/task";

export const TASK_QUERY_KEYS = {
  all: ['tasks'] as const,
  list: (taskListId: number, date?: string) => ['tasks', 'list', taskListId, date] as const,
};

export function useTaskListQuery(params: GetTaskListParams) {
  const { teamId, groupId, taskListId, date } = params;

  return useQuery({
    queryKey: TASK_QUERY_KEYS.list(taskListId, date),
    queryFn: () => getTaskList({ teamId, groupId, taskListId, date }),
    enabled: Boolean(teamId && groupId && taskListId),
  })
}