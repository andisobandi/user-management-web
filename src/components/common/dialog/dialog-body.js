import React from "react";

import { cx } from "@utils/cx";
import { useDialogContext } from "./dialog-context";

export const DialogBody = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;

  const dialog = useDialogContext();

  return (
    <div
      ref={ref}
      className={cx(
        "flex-1 px-6 pt-2 pb-6",
        { "overflow-auto": dialog.scrollBehavior === "inside" },
        className
      )}
      {...rest}
    />
  );
});
