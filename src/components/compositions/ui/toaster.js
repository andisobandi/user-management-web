import React from "react";

import { Toaster as BaseToaster, Toast, createToaster } from "@components/common/toast";
import { Portal } from "@components/common/portal";
import { Spinner } from "@components/common/spinner";
import { Stack } from "@components/common/stack";

export const toaster = createToaster({
  placement: "top-end",
  pauseOnPageIdle: true,
});

export function Toaster() {
  return (
    <Portal>
      <BaseToaster toaster={toaster}>
        {(toast) => (
          <Toast.Root className="md:w-96">
            {toast.type === "loading" ? (
              <Spinner size="sm" className="text-tw-blue-solid" />
            ) : (
              <Toast.Indicator />
            )}
            <Stack className="gap-1 flex-1 max-w-full">
              {toast.title && <Toast.Title>{toast.title}</Toast.Title>}
              {toast.description && <Toast.Description>{toast.description}</Toast.Description>}
            </Stack>
            {toast.action && <Toast.ActionTrigger>{toast.action.label}</Toast.ActionTrigger>}
            {toast.closable && <Toast.CloseTrigger />}
          </Toast.Root>
        )}
      </BaseToaster>
    </Portal>
  );
}
