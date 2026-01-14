import React from "react";
import { Collapsible as ArkCollapsible } from "@ark-ui/react";

export const CollapsibleTrigger = React.forwardRef((props, ref) => {
  return <ArkCollapsible.Trigger ref={ref} {...props} />;
});
