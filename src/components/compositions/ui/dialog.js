import * as React from "react";

import { Dialog as BaseDialog } from "@components/common/dialog";
import { Portal } from "@components/common/portal";
import { CloseButton } from "./close-button";

export const DialogContent = React.forwardRef((props, ref) => {
  const { children, portalled = true, portalRef, backdrop = true, ...rest } = props;

  return (
    <Portal disabled={!portalled} container={portalRef}>
      {backdrop && <BaseDialog.Backdrop />}
      <BaseDialog.Positioner>
        <BaseDialog.Content ref={ref} {...rest} asChild={false}>
          {children}
        </BaseDialog.Content>
      </BaseDialog.Positioner>
    </Portal>
  );
});

export const DialogCloseTrigger = React.forwardRef((props, ref) => {
  return (
    <BaseDialog.CloseTrigger className="absolute top-2 end-2" {...props} asChild>
      <CloseButton size="sm" ref={ref}>
        {props.children}
      </CloseButton>
    </BaseDialog.CloseTrigger>
  );
});

export const DialogRoot = BaseDialog.Root;
export const DialogFooter = BaseDialog.Footer;
export const DialogHeader = BaseDialog.Header;
export const DialogBody = BaseDialog.Body;
export const DialogBackdrop = BaseDialog.Backdrop;
export const DialogTitle = BaseDialog.Title;
export const DialogDescription = BaseDialog.Description;
export const DialogTrigger = BaseDialog.Trigger;
export const DialogActionTrigger = BaseDialog.ActionTrigger;
