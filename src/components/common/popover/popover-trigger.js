import React from "react";
import { Popover as ArkPopover } from "@ark-ui/react";

export const PopoverTrigger = React.forwardRef((props, ref) => {
  return <ArkPopover.Trigger ref={ref} {...props} />;
});
