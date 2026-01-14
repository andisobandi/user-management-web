import React from "react";
import { Dialog as ArkDialog } from "@ark-ui/react";

import { cx } from "@utils/cx";

export const DialogTitle = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;

  return <ArkDialog.Title ref={ref} className={cx("text-lg font-semibold", className)} {...rest} />;
});
