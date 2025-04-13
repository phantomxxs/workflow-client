export interface CreateProjectPayload {
  name: string;
  description?: string;
  startDate?: string;
  endDate?: string;
}

export interface CreateProjectResponseData extends CreateProjectPayload {
  id: number;
}
