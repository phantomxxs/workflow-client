import { ApiResponse } from "../http/response";
import http from "../http";
import { GET_TASKS } from "../routes";
import {
  CreateTaskPayload,
  CreateTaskResponseData,
  GetTasksQuery,
  GetTasksResponse,
  UpdateTaskStatusPayload,
} from "./types";
import { queryFormatter } from "@/utils/utils";

// CREATE
export const createTask = async (
  payload: CreateTaskPayload,
): ApiResponse<CreateTaskResponseData> => {
  const res = await http.post(GET_TASKS, payload);
  return res.data;
};

// RETRIEVE
export const getTasks = async (
  queries: GetTasksQuery,
): ApiResponse<GetTasksResponse> => {
  const res = await http.get(`${GET_TASKS + "?" + queryFormatter(queries)}`);
  return res.data;
};

// UPDATE
export const updateTaskStatus = async (
  payload: UpdateTaskStatusPayload,
): ApiResponse<CreateTaskResponseData> => {
  const res = await http.patch(
    `${GET_TASKS}/${payload.taskId}/status`,
    payload.body,
  );

  return res.data;
};
