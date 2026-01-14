import { Dialog as ArkDialog } from "@ark-ui/react";

import { DialogRootProvider as RootProvider } from "./dialog-root-provider";
import { DialogRoot as Root } from "./dialog-root";
import { DialogTrigger as Trigger } from "./dialog-trigger";
import { DialogBackdrop as Backdrop } from "./dialog-backdrop";
import { DialogPositioner as Positioner } from "./dialog-positioner";
import { DialogContent as Content } from "./dialog-content";
import { DialogHeader as Header } from "./dialog-header";
import { DialogTitle as Title } from "./dialog-title";
import { DialogBody as Body } from "./dialog-body";
import { DialogFooter as Footer } from "./dialog-footer";
import { DialogActionTrigger as ActionTrigger } from "./dialog-action-trigger";
import { DialogCloseTrigger as CloseTrigger } from "./dialog-close-trigger";
import { DialogDescription as Description } from "./dialog-description";

export { useDialog as useArkDialog } from "@ark-ui/react";

export const Dialog = {
  Root,
  RootProvider,
  Trigger,
  Backdrop,
  Positioner,
  Content,
  Header,
  Title,
  Body,
  Footer,
  ActionTrigger,
  CloseTrigger,
  Description,
  Context: ArkDialog.Context,
};
