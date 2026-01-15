import React from "react";
import { Link } from "react-router-dom";
import { IoIosApps } from "react-icons/io";
import { LuPower, LuSettings, LuUserRound } from "react-icons/lu";

import { Stack, HStack } from "@components/common/stack";
import { IconButton } from "@components/common/button";
import { Avatar } from "@components/common/avatar";
import { Menu } from "@components/common/menu";
import { Portal } from "@components/common/portal";
import { Text } from "@components/common/typography/text";

export function AppHeader() {
  return (
    <header className="sticky top-0 z-50">
      <div className="w-full bg-white/90 backdrop-blur-lg md:px-6 px-[15px] py-3 border-b border-slate-200">
        <HStack className="justify-between h-full">
          <HStack>
            <IconButton size="sm" colorScheme="blue" variant="subtle">
              <IoIosApps />
            </IconButton>
            <span className="text-xl font-semibold lg:inline-block hidden bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              User Management System
            </span>
          </HStack>
          <Menu.Root>
            <Menu.Trigger className="rounded-full tw-focus:tw-ring-outside tw-focus:outline-tw-gray-focus-ring">
              <Avatar.Root size="sm" variant="solid" colorScheme="blue">
                <Avatar.Image />
                <Avatar.Fallback name="John Doe" />
              </Avatar.Root>
            </Menu.Trigger>
            <Portal>
              <Menu.Positioner>
                <Menu.Content>
                  <Menu.Item
                    value="profile"
                    className="tw-highlighted:bg-transparent tw-highlighted:text-transparent"
                  >
                    <HStack className="gap-4">
                      <Avatar.Root size="sm" colorScheme="blue">
                        <Avatar.Fallback name="John Doe" />
                        <Avatar.Image />
                      </Avatar.Root>
                      <Stack className="gap-0">
                        <Text className="text-slate-600 font-medium">John Doe</Text>
                        <Text className="text-slate-600 text-xs">john.doe@example.com</Text>
                      </Stack>
                    </HStack>
                  </Menu.Item>
                  <Menu.Separator className="bg-slate-200/70 border-slate-200/70" />
                  <Menu.Item
                    className="text-slate-600 font-medium tw-icon:size-3.5 tw-highlighted:bg-slate-200 tw-highlighted:text-slate-900"
                    asChild
                    value="account"
                  >
                    <Link to="/account">
                      <LuUserRound />
                      Account
                    </Link>
                  </Menu.Item>
                  <Menu.Item
                    className="text-slate-600 font-medium tw-icon:size-3.5 tw-highlighted:bg-slate-200 tw-highlighted:text-slate-900"
                    asChild
                    value="settings"
                  >
                    <Link to="/settings">
                      <LuSettings />
                      Settings
                    </Link>
                  </Menu.Item>
                  <Menu.Separator className="bg-slate-200/70 border-slate-200/70" />
                  <Menu.Item
                    className="text-slate-600 font-medium tw-icon:size-3.5 tw-highlighted:bg-slate-200 tw-highlighted:text-slate-900"
                    value="logout"
                  >
                    <LuPower />
                    Logout
                  </Menu.Item>
                </Menu.Content>
              </Menu.Positioner>
            </Portal>
          </Menu.Root>
        </HStack>
      </div>
    </header>
  );
}
