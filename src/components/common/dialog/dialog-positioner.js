import React from "react";
import { Dialog as ArkDialog } from "@ark-ui/react";

import { cx } from "@utils/cx";
import { useDialogContext } from "./dialog-context";
import { dialogClasses } from "./dialog-style";

export const DialogPositioner = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;

  const dialog = useDialogContext();
  const classes = dialogClasses.getPositionerClasses(dialog);

  return (
    <ArkDialog.Positioner
      ref={ref}
      className={cx(classes, className)}
      style={{ "--dialog-z-index": "1400" }}
      {...rest}
    />
  );
});
