import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";

import { Toaster } from "@components/compositions/ui/toaster";
import { queryClient } from "@config/query-client";
import Routes from "./routes";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
