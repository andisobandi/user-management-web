import React from "react";
import { Dialog as ArkDialog } from "@ark-ui/react";

import { DialogProvider } from "./dialog-context";

export const DialogRoot = React.forwardRef((props, ref) => {
  const {
    className,
    size = "md",
    scrollBehavior = "outside",
    placement = "top",
    motionPreset = "scale",
    unmountOnExit = true,
    lazyMount = true,
    ...rest
  } = props;

  const dialogProps = {
    size,
    placement,
    scrollBehavior,
    motionPreset,
  };

  const rootProps = {
    unmountOnExit,
    lazyMount,
  };

  return (
    <DialogProvider value={dialogProps}>
      <ArkDialog.Root ref={ref} {...rootProps} {...rest} />
    </DialogProvider>
  );
});
