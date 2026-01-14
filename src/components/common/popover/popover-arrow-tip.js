import React from "react";
import { Popover as ArkPopover } from "@ark-ui/react";

export const PopoverArrowTip = React.forwardRef((props, ref) => {
  return <ArkPopover.ArrowTip ref={ref} className="border-t-[1px] border-s-[1px]" {...props} />;
});
