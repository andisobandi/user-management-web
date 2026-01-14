import { QueryClient, QueryCache, MutationCache } from "@tanstack/react-query";

import { toaster } from "@components/compositions/ui/toaster";

const getErrorMessage = (error) => {
  if (!error) return "An unknown error occurred.";

  if (error.response) {
    const { data } = error.response;
    if (data?.message) return data.message;
    if (typeof data === "string") return data;
  }

  if (error?.data?.message) return error.data.message;

  return error.message ?? "Something went wrong.";
};

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      if (query?.meta?.silent) return;

      const status = error?.status ?? error?.response?.status;
      if (status === 422) return;

      toaster.create({
        type: "error",
        description: getErrorMessage(error),
      });
    },
  }),
  mutationCache: new MutationCache({
    onError: (error, _variables, _context, mutation) => {
      if (mutation?.meta?.silent) return;

      const status = error?.status ?? error?.response?.status;
      if (status === 422 || status === 429) return;

      toaster.create({
        type: "error",
        description: getErrorMessage(error),
      });
    },
  }),
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});
