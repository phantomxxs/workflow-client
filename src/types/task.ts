import { Attachment } from "./attachment";
import { Comment } from "./comment";

export enum Priority {
  urgent = "urgent",
  high = "high",
  medium = "medium",
  low = "low",
  backlog = "backlog",
}

export type Status = "in progress" | "to do" | "under review" | "completed";
export interface TaskAssignment {
  id?: number;
  taskId?: number;
  userId?: number;
}

export interface Task {
  id: number;
  title?: string;
  description?: string;
  status?: Status;
  priority?: Priority;
  tags?: string;
  startDate?: string;
  endDate?: string;
  dueDate?: string;
  points?: number;
  projectId?: number;
  authorUserId?: number;
  assignedUserId?: number[];

  taskAssignment: TaskAssignment[];
  attachments: Attachment[];
  comments: Comment[];
}
