import {
  QueryCache,
  QueryClient,
  QueryClientProvider as TanstackQueryClientProvider,
} from "@tanstack/react-query";
import { useEffect, useMemo } from "react";
import useQueryHandler from "@/hooks/useQueryHandler";

import { useAuth } from "./AuthProvider";

function QueryClientProvider({ children }) {
  // Hooks
  const { handleSuccess, handleError } = useQueryHandler();
  const { loggedInUser, logoutUser } = useAuth();

  // Query client setup
  const queryClient = useMemo(
    () =>
      new QueryClient({
        queryCache: new QueryCache({
          onSuccess: (data) => {
            console.log(data);
          },
          onError: (error) => {
            console.log(error);
            handleError(error, logoutUser);
          },
        }),
        defaultOptions: {
          mutations: {
            onSuccess: (data) => {
              handleSuccess(data);
            },
            onError: (error) => {
              handleError(error, logoutUser);
            },
          },
          queries: {
            select: (data) => data.data,
          },
        },
      }),
    []
  );

  useEffect(() => {
    if (!loggedInUser) {
      queryClient.removeQueries();
    }
  }, [loggedInUser]);

  return (
    <TanstackQueryClientProvider client={queryClient}>
      {children}
    </TanstackQueryClientProvider>
  );
}

export default QueryClientProvider;
