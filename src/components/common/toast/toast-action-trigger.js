import React from "react";
import { Toast as ArkToast } from "@ark-ui/react";

import { cx } from "@utils/cx";

export const ToastActionTrigger = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;

  return (
    <ArkToast.ActionTrigger
      ref={ref}
      className={cx(
        "text-sm font-medium h-8 px-3 rounded self-center border",
        "border-[var(--toast-border-color, inherit)] transition-colors duration-200",
        "tw-hover:bg-[var(--toast-trigger-bg)]",
        className
      )}
      {...rest}
    />
  );
});
