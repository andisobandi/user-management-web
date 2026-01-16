import React from "react";

import { Toaster } from "@components/compositions/ui/toaster";
import { UserProvider } from "@context/user-context";
import Routes from "./routes";

function App() {
  return (
    <UserProvider>
      <Routes />
      <Toaster />
    </UserProvider>
  );
}

export default App;
