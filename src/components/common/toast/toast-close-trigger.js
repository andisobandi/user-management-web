import React from "react";
import { Toast as ArkToast } from "@ark-ui/react";

import { cx } from "@utils/cx";
import { CloseIcon } from "@icons";

export const ToastCloseTrigger = React.forwardRef((props, ref) => {
  const { children = <CloseIcon />, className, ...rest } = props;

  return (
    <ArkToast.CloseTrigger
      ref={ref}
      className={cx(
        "absolute top-1 end-1 p-1 inline-flex items-center justify-center text-[rgb(0_0_0/0.6)]",
        "rounded text-base transition-colors duration-200 tw-icon:size-[1em]",
        className
      )}
      {...rest}
    >
      {children}
    </ArkToast.CloseTrigger>
  );
});
