import React from "react";
import QueryClientProvider from "./query-client";

const RootProvider = ({ children }: { children: React.ReactNode }) => {
  return <QueryClientProvider>{children}</QueryClientProvider>;
};

export default RootProvider;
