import { QueryClient, useMutation } from "@tanstack/react-query";
import { GET_TASKS } from "../queryKeys";
import { createTask, updateTaskStatus } from "@/api/tasks/tasks";

export const useCreateTask = () => {
  const queryClient = new QueryClient();

  return useMutation({
    mutationFn: createTask,
    onSuccess: (res) => {
      const projectId = res.data.projectId;
      queryClient.invalidateQueries({ queryKey: [GET_TASKS, { projectId }] });
    },
  });
};

export const useUpdateTaskStatus = () => {
  const queryClient = new QueryClient();

  return useMutation({
    mutationFn: updateTaskStatus,
    onSuccess: (res) => {
      const projectId = res.data.projectId;
      queryClient.invalidateQueries({ queryKey: [GET_TASKS, { projectId }] });
    },
  });
};
