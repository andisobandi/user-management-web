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
import { postUser } from "@context/user-actions";
import { UserForm } from "./user-form";

export function UserAdd() {
  const { state, dispatch } = useUserContext();
  const { mode } = state;

  const handleSubmit = async (data) => {
    try {
      await postUser(dispatch, data);
    } finally {
      toaster.create({
        description: "User added successfully.",
        type: "success",
      });
    }
  };

  return (
    <DialogRoot
      lazyMount
      open={mode === "add"}
      onOpenChange={(e) => dispatch({ type: "SET_MODE", payload: e.open ? "add" : null })}
      placement="center"
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Users</DialogTitle>
        </DialogHeader>
        <UserForm onSubmit={handleSubmit} />
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
}
