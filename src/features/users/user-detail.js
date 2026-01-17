import React from "react";

import {
  DialogRoot,
  DialogBody,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogCloseTrigger,
} from "@components/compositions/ui/dialog";
import { Avatar } from "@components/compositions/ui/avatar";
import { HStack } from "@components/common/stack";
import { useUserContext } from "@context/user-context";
import { DataListRoot, DataListItem } from "@components/compositions/ui/data-list";

export const formatDate = (dateString) => {
  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(dateString));
};

export function UserDetail() {
  const { state, dispatch } = useUserContext();
  const { selectedUser, mode } = state;

  if (!selectedUser) return null;

  const handleToggleDialog = (open) => {
    dispatch({ type: "SET_MODE", payload: open ? "detail" : null });
  };

  return (
    <DialogRoot
      lazyMount
      open={mode === "detail"}
      onOpenChange={(e) => handleToggleDialog(e.open)}
      placement="center"
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>User Details</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <DataListRoot orientation="horizontal" className="divide-y">
            <DataListItem
              label="User"
              value={
                <HStack>
                  <Avatar size="xs" name={selectedUser.name} src={selectedUser.avatar} />
                  {selectedUser.name}
                </HStack>
              }
              className="pt-4"
            />
            <DataListItem label="Username" value={selectedUser.username} className="pt-4" />
            <DataListItem label="Email" value={selectedUser.email} className="pt-4" />
            <DataListItem label="Phone" value={selectedUser.phone} className="pt-4" />
            <DataListItem label="Website" value={selectedUser.website} className="pt-4" />
            <DataListItem
              label="Registration Date"
              value={formatDate(selectedUser.createdAt)}
              className="pt-4"
            />
          </DataListRoot>
        </DialogBody>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
}
