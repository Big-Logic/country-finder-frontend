import {
  QueryClient,
  QueryClientProvider as TanstackQueryClientProvider,
} from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();

const QueryClientProvider = ({ children }) => {
  return (
    // Provide the client to your App
    <TanstackQueryClientProvider client={queryClient}>
      {children}
    </TanstackQueryClientProvider>
  );
};

export default QueryClientProvider;
