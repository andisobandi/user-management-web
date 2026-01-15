import React from "react";
import { IoMdAdd } from "react-icons/io";

import { ButtonPrimary } from "@components/compositions/ui/button";
import { Stack } from "@components/common/stack";
import { Flex } from "@components/common/flex";
import { ListUsers } from "./list-users";

export function Users() {
  return (
    <div className="space-y-5">
      <div className="rounded-md bg-white text-tw-foreground shadow-sm">
        <div className="p-6">
          <Stack className="lg:flex-row flex-wrap gap-6">
            <Flex className="flex-1 gap-3">
              <ButtonPrimary className="rounded-md">
                <IoMdAdd />
                Add User
              </ButtonPrimary>
            </Flex>
          </Stack>
        </div>
      </div>
      <ListUsers />
    </div>
  );
}
