import React from "react";
import { IoMdAdd } from "react-icons/io";

import { ButtonPrimary } from "@components/compositions/ui/button";
import { Stack } from "@components/common/stack";
import { Flex } from "@components/common/flex";
import { useUserContext } from "@context/user-context";
import { UserList } from "./user-list";

export function Users() {
  const { dispatch } = useUserContext();

  const handleOpenDialog = () => {
    dispatch({ type: "SET_MODE", payload: "add" });
  };

  return (
    <div className="space-y-5">
      <div className="rounded-md bg-white text-tw-foreground shadow-sm">
        <div className="p-6">
          <Stack className="lg:flex-row flex-wrap gap-6">
            <Flex className="flex-1 gap-3">
              <ButtonPrimary onClick={handleOpenDialog}>
                <IoMdAdd />
                Add User
              </ButtonPrimary>
            </Flex>
          </Stack>
        </div>
      </div>
      <UserList />
    </div>
  );
}
