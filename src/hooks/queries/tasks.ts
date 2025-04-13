import { getTasks } from "@/api/tasks/tasks";
import { useQuery } from "@tanstack/react-query";
import { GET_TASKS } from "../queryKeys";
import { GetTasksQuery } from "@/api/tasks/types";

export const useGetTasks = (query: GetTasksQuery) => {
  return useQuery({
    queryFn: () => getTasks(query),
    select: (res) => res.data,
    queryKey: [GET_TASKS, query],
  });
};
