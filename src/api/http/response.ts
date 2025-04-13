export interface  WorkflowResponse<T> {
  status: string;
  message: string;
  data: T;
}

export type ApiResponse<T> = Promise<WorkflowResponse<T>>;
