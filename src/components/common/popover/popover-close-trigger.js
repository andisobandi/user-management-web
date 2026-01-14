import React from "react";
import { Popover as ArkPopover } from "@ark-ui/react";

export const PopoverCloseTrigger = React.forwardRef((props, ref) => {
  return <ArkPopover.CloseTrigger ref={ref} {...props} />;
});
