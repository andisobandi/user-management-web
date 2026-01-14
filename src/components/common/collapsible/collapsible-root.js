import React from "react";
import { Collapsible as ArkCollapsible } from "@ark-ui/react";

export const CollapsibleRoot = React.forwardRef((props, ref) => {
  return <ArkCollapsible.Root ref={ref} {...props} />;
});
