import React from "react";
import { Popover as ArkPopover } from "@ark-ui/react";

export const PopoverTitle = React.forwardRef((props, ref) => {
  return <ArkPopover.Title ref={ref} className="font-medium" {...props} />;
});
