import React from "react";
import { Popover as ArkPopover } from "@ark-ui/react";

export const PopoverPositioner = React.forwardRef((props, ref) => {
  return <ArkPopover.Positioner ref={ref} {...props} />;
});
