import { Attachment } from "./attachment";
import { Task, TaskAssignment } from "./task";

export interface User {
  userId: number;
  username: string;
  cognitoId: string;
  teamId: number | null;
  profilePictureUrl: string | null;
  taskAssignment: TaskAssignment[];
  attachments: Attachment[];
  comments: Comment[];
  authoredTasks: Task[];
  assignedTasks: Task[];
  team: Team | null;
}

interface Team {
  id?: number;
  name?: string;
}
