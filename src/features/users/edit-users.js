import React from "react";

import { Dialog } from "@components/common/dialog";
import { CloseButton } from "@components/common/button";
import { Portal } from "@components/common/portal";
import { FormUsers } from "./form-users";

export function EditUsers(props) {
  const { open, onOpen } = props;

  return (
    <Dialog.Root lazyMount open={open} onOpenChange={(e) => onOpen(e.open)} placement="center">
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Edit Users</Dialog.Title>
            </Dialog.Header>
            <FormUsers />
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
