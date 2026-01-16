import React from "react";

import {
  DialogRoot,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogCloseTrigger,
} from "@components/compositions/ui/dialog";
import { toaster } from "@components/compositions/ui/toaster";
import { useUserContext } from "@context/user-context";
import { putUser } from "@context/user-actions";
import { UserForm } from "./user-form";

export function UserEdit() {
  const { state, dispatch } = useUserContext();
  const { mode, selectedUser } = state;

  const handleSubmit = async (data) => {
    try {
      await putUser(dispatch, data, selectedUser);
    } finally {
      toaster.create({
        description: "User updated successfully.",
        type: "success",
      });
    }
  };

  return (
    <DialogRoot
      lazyMount
      open={mode === "edit"}
      onOpenChange={(e) => dispatch({ type: "SET_MODE", payload: e.open ? "edit" : null })}
      placement="center"
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Users</DialogTitle>
        </DialogHeader>
        <UserForm onSubmit={handleSubmit} defaultValues={selectedUser} />
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
}
