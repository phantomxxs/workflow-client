import { Project } from "@/types/project";
import http from "../http";
import { ApiResponse } from "../http/response";
import { GET_PROJECTS } from "../routes";
import {
  CreateProjectPayload,
  CreateProjectResponseData,
} from "./types";

// CREATE
export const createProject = async (
  payload: CreateProjectPayload,
): ApiResponse<CreateProjectResponseData> => {
  const res = await http.post(GET_PROJECTS, payload);
  return res.data;
};

// RETRIEVE
export const getProjects = async (): ApiResponse<Project[]> => {
  const res = await http.get(GET_PROJECTS);
  return res.data;
};
