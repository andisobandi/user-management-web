import React from "react";
import { Popover as ArkPopover } from "@ark-ui/react";

import { PopoverProvider } from "./popover-context";

export const PopoverRoot = React.forwardRef((props, ref) => {
  const { className, size = "md", ...rest } = props;

  return (
    <PopoverProvider value={{ size }}>
      <ArkPopover.Root ref={ref} className={className} {...rest} />
    </PopoverProvider>
  );
});
