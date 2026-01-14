import React from "react";
import { Toast as ArkToast } from "@ark-ui/react";

import { cx } from "@utils/cx";

export const ToastTitle = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;

  return (
    <ArkToast.Title ref={ref} className={cx("font-medium text-sm me-2", className)} {...rest} />
  );
});
