import React from "react";
import { Dialog as ArkDialog } from "@ark-ui/react";

import { cx } from "@utils/cx";

export const DialogDescription = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;

  return (
    <ArkDialog.Description ref={ref} className={cx("text-tw-fg-muted", className)} {...rest} />
  );
});
