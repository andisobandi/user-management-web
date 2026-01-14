import React from "react";
import { Collapsible as ArkCollapsible } from "@ark-ui/react";

export const CollapsibleIndicator = React.forwardRef((props, ref) => {
  return <ArkCollapsible.Indicator ref={ref} {...props} />;
});
