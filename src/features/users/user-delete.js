import React from "react";

import {
  DialogRoot,
  DialogBody,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogCloseTrigger,
  DialogFooter,
  DialogActionTrigger,
} from "@components/compositions/ui/dialog";
import { Button } from "@components/common/button";
import { useUserContext } from "@context/user-context";
import { toaster } from "@components/compositions/ui/toaster";
import { deleteUser } from "@context/user-actions";

export function UserDelete() {
  const { state, dispatch } = useUserContext();
  const { selectedUser, mode } = state;

  const handleConfirmDelete = () => {
    if (!selectedUser) return;
    deleteUser(dispatch, selectedUser.id);
    toaster.create({
      description: "User deleted successfully.",
      type: "success",
    });
  };

  const handleToggleDialog = (open) => {
    dispatch({ type: "SET_MODE", payload: open ? "delete" : null });
  };

  return (
    <DialogRoot
      lazyMount
      open={mode === "delete"}
      onOpenChange={(e) => handleToggleDialog(e.open)}
      placement="center"
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Users?</DialogTitle>
        </DialogHeader>
        <DialogBody>
          Are you sure want to delete this user? This action cannot be undone.
        </DialogBody>
        <DialogFooter>
          <DialogActionTrigger />
          <Button colorScheme="red" onClick={handleConfirmDelete}>
            Delete
          </Button>
        </DialogFooter>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
}
