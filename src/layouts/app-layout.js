import React from "react";
import { Outlet } from "react-router-dom";

import { AppHeader } from "./app-header";
import { AppFooter } from "./app-footer";

export function AppLayout() {
  return (
    <main className="h-full">
      <AppHeader />
      <div className="transition-all duration-300">
        <div className="md:pt-6 pb-[37px] pt-[15px] md:px-6 px-4 min-h-screen">
          <Outlet />
        </div>
      </div>
      <AppFooter />
    </main>
  );
}
