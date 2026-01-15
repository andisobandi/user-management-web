import React from "react";

import { Dialog } from "@components/common/dialog";
import { Button, CloseButton } from "@components/common/button";
import { Portal } from "@components/common/portal";

export function DeleteUsers(props) {
  const { open, onOpen } = props;

  return (
    <Dialog.Root lazyMount open={open} onOpenChange={(e) => onOpen(e.open)} placement="center">
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Delete Users?</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              Are you sure want to delete this user? This action cannot be undone.
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger />
              <Button colorScheme="red">Delete</Button>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
