export const queryKeys = {
  report: {
    all: ["report"] as const,
    lists: (filters?: Record<string, unknown>) =>
      [...queryKeys.report.all, "list", filters] as const,
    detail: (id: string) => [...queryKeys.report.all, "detail", id] as const,
  },
} as const;
