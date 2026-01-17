import React from "react";

import { HStack } from "@components/common/stack";
import { IconButton } from "@components/common/button";
import { Avatar } from "@components/compositions/ui/avatar";
import { MenuBarIcon } from "@icons";

export function AppHeader() {
  return (
    <header className="sticky top-0 z-50">
      <div className="w-full bg-white/90 backdrop-blur-lg md:px-6 px-[15px] py-3 border-b border-slate-200">
        <HStack className="justify-between h-full">
          <HStack>
            <IconButton
              variant="ghost"
              size="sm"
              className="text-blue-600 tw-hover:bg-slate-100 tw-icon:size-6"
            >
              <MenuBarIcon />
            </IconButton>
            <span className="text-xl font-semibold lg:inline-block hidden bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              User Management System
            </span>
          </HStack>
          <Avatar size="sm" variant="solid" colorScheme="blue" name="John Doe" />
        </HStack>
      </div>
    </header>
  );
}
