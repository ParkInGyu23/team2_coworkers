import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateTask } from '../api/updateTask';
import { TASK_QUERY_KEYS } from '../lib/queryKeys';
import { TaskCommonParams } from '../model/params/task.params';
import { CreateTaskParams } from '../model/params/task.create.params';

type UseUpdateTaskMutationParams = TaskCommonParams & {
  date?: string;
};

export function useUpdateTaskMutation(params: UseUpdateTaskMutationParams) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ taskId, body }: { taskId: number; body: CreateTaskParams }) => {
      return updateTask(
        {
          groupId: params.groupId,
          taskListId: params.taskListId,
          taskId,
        },
        body,
      );
    },

    onSuccess: (result) => {
      if (!result.ok) return;

      queryClient.invalidateQueries({
        queryKey: TASK_QUERY_KEYS.lists(params.groupId),
      });
    },
  });
}
