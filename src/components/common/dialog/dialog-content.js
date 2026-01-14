import React from "react";
import { Dialog as ArkDialog } from "@ark-ui/react";

import { cx } from "@utils/cx";
import { useDialogContext } from "./dialog-context";
import { dialogClasses } from "./dialog-style";

export const DialogContent = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;

  const dialog = useDialogContext();
  const classes = dialogClasses.getContentClasses(dialog);

  const dialogBaseMargin = {
    center: "auto",
    top: "4rem",
    bottom: "4rem",
  };

  const dialogMargin =
    dialog.size === "cover" || dialog.size === "full" ? { "--dialog-margin": "0" } : {};

  return (
    <ArkDialog.Content
      ref={ref}
      className={cx(classes, className)}
      style={{
        "--dialog-z-index": "1400",
        "--dialog-base-margin": dialogBaseMargin[dialog.placement],
        ...dialogMargin,
      }}
      {...rest}
    />
  );
});
