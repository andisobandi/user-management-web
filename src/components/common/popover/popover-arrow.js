import React from "react";
import { Popover as ArkPopover } from "@ark-ui/react";

import { PopoverArrowTip } from "./popover-arrow-tip";

export const PopoverArrow = React.forwardRef((props, ref) => {
  const { children = <PopoverArrowTip />, ...rest } = props;

  return (
    <ArkPopover.Arrow
      ref={ref}
      {...rest}
      style={{ "--arrow-size": "0.75rem", "--arrow-background": "var(--popover-bg)" }}
    >
      {children}
    </ArkPopover.Arrow>
  );
});
