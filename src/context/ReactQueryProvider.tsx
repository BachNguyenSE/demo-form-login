'use client';

// import { useToken } from '@geit/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React, {useState } from 'react';

export default function Providers({ children }: { children: React.ReactNode }) {
  
  const [queryClient] = useState(setupReactQuery);
  // const { fetchToken } = useToken();

  //make sure axios setup complete before render anything

  return (
    <QueryClientProvider client={queryClient}>
      {isTrue(process.env.NEXT_PUBLIC_ENABLE_REACT_QUERY_DEVTOOLS) && <ReactQueryDevtools />}
      {children}
    </QueryClientProvider>
  );
}

export const queryClient: QueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      useErrorBoundary: (error: any) => {
        // Request is canceled if token expired (handled in axios-config request interceptor)
        // Don't throw this error to error boundary
        if (error?.message === 'canceled') return false;
        return true;
      },
      retry: 0,
    },
  },
});

const setupReactQuery = () => {
  // console.log('setupReactQuery====================', typeof window === 'undefined');
  return queryClient;
};

const isTrue = (value?: string | number) => {
  return (typeof value === 'string' && value?.toUpperCase() === 'TRUE') || value === 1;
};