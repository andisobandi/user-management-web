import { ToastRoot as Root } from "./toast-root";
import { ToastIndicator as Indicator } from "./toast-indicator";
import { ToastTitle as Title } from "./toast-title";
import { ToastDescription as Description } from "./toast-description";
import { ToastActionTrigger as ActionTrigger } from "./toast-action-trigger";
import { ToastCloseTrigger as CloseTrigger } from "./toast-close-trigger";

export { createToaster } from "@ark-ui/react";
export { Toaster } from "./toaster";

export const Toast = {
  Root,
  Indicator,
  Title,
  Description,
  ActionTrigger,
  CloseTrigger,
};
