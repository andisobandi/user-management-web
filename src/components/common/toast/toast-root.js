import React from "react";
import { Toast as ArkToast } from "@ark-ui/react";

import { cx } from "@utils/cx";

export const ToastRoot = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;

  return (
    <ArkToast.Root
      ref={ref}
      className={cx(
        "w-full flex items-center relative gap-3 py-4 ps-4 pe-6",
        "rounded tw-toast-translate",
        "z-[var(--z-index)] h-[var(--height)] opacity-[var(--opacity)]",
        "will-change-[translate,opacity,scale]",
        "bg-white text-tw-fg-default shadow-tw-xl",
        "tw-toast-transition tw-close:tw-toast-transition-close",
        "[&[data-type=warning]]:tw-toast-warning",
        "[&[data-type=success]]:tw-toast-success",
        "[&[data-type=error]]:tw-toast-error",
        className
      )}
      style={{
        "--toast-trigger-bg": "#fafafa",
      }}
      {...rest}
    />
  );
});
