import {
  ApiResponse,
  CreateReportForm,
  CreateUserInput,
  PaginatedResponse,
  PaginationParams,
  User,
} from "@/types";
import apiClient from "../api-client";

const reportApi = {
  getReports: (params?: PaginationParams) =>
    apiClient.get<PaginatedResponse<User>>("/reports", { params }),

  getUser: (id: string) => apiClient.get<ApiResponse<User>>(`/users/${id}`),

  createReports: (data: CreateReportForm) =>
    apiClient.post<ApiResponse<User>>("items/reports", data),

  updateUser: (id: string, data: Partial<CreateUserInput>) =>
    apiClient.put<ApiResponse<User>>(`/users/${id}`, data),

  deleteUser: (id: string) =>
    apiClient.delete<ApiResponse<void>>(`/users/${id}`),
};

export default reportApi;
