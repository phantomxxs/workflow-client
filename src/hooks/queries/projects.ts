import { getProjects } from "@/api/projects/projects";
import { useQuery } from "@tanstack/react-query";
import { GET_PROJECTS } from "../queryKeys";

export const useGetProjects = () => {
  return useQuery({
    queryFn: getProjects,
    queryKey: [GET_PROJECTS],
    select: (res) => res.data,
  });
};

