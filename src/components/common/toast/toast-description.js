import React from "react";
import { Toast as ArkToast } from "@ark-ui/react";

import { cx } from "@utils/cx";

export const ToastDescription = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;

  return (
    <ArkToast.Description
      ref={ref}
      className={cx("inline text-sm opacity-80", className)}
      {...rest}
    />
  );
});
