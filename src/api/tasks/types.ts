import { Project } from "@/types/project";
import { Priority, Status } from "@/types/task";
import { Task } from "@/types/task";

export interface CreateTaskPayload {
  title: string;
  description?: string;
  priority?: Priority;
  status?: Status;
  authorUserId: number;
  assignedUserId?: number[];
  projectId?: number;
}

export interface CreateTaskResponseData {
  id: number;
  title: string;
  description: string | null;
  status: Status | null;
  priority: Priority | null;
  tags: string | null;
  startDate: string | null;
  endDate: string | null;
  dueDate: string | null;
  points: number | null;
  projectId: number | null;
  authorUserId: number;
  assignees: number[];
}

export interface GetTasksQuery {
  projectId: number;
}

export interface GetTasksResponse {
  project: Project;
  tasks: Task[];
}

export interface UpdateTaskStatusPayload {
  taskId: number;

  body: {
    status: Status;
  };
}
