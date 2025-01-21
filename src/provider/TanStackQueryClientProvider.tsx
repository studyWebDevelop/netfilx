import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

const queryClient = new QueryClient();

interface TanStackQueryClientProviderProps {
  children: React.ReactNode;
}
const TanStackQueryClientProvider = ({
  children,
}: TanStackQueryClientProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default TanStackQueryClientProvider;
