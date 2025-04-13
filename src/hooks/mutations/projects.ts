import { createProject } from "@/src/api/projects/projects";
import { QueryClient, useMutation } from "@tanstack/react-query";
import { GET_PROJECTS } from "../queryKeys";

export const useCreateProject = () => {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: createProject,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_PROJECTS, ] });
    },
  });
};
