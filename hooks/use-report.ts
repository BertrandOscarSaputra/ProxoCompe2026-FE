import masterApi from "@/services/endpoints/master";
import reportApi from "@/services/endpoints/report";
import { CreateReportForm } from "@/types";
import {
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { queryKeys } from "./keys";

// Infinite scroll
export const useInfiniteReports = (limit = 10) => {
  return useInfiniteQuery({
    queryKey: queryKeys.report.lists({ infinite: true, limit }),
    queryFn: async ({ pageParam = 1 }) => {
      const res = await reportApi.getReports({
        page: pageParam,
        limit,
        meta: "*",
      });
      return res.data;
    },
    getNextPageParam: (lastPage, allPages) => {
      const totalPages = Math.ceil((lastPage.meta?.total_count || 0) / limit);
      const nextPage = allPages.length + 1;
      return nextPage <= totalPages ? nextPage : undefined;
    },
    initialPageParam: 1,
  });
};

export const useCreateReport = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CreateReportForm) => {
      const { photo, ...rest } = data;

      const imgId = await masterApi.uploadImg(photo);
      const res = await reportApi.createReports({
        ...rest,
        photo: imgId.data.data.id,
      });

      return res.data.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.report.all });
    },
  });
};
