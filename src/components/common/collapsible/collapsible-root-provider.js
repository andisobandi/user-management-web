import React from "react";
import { Collapsible as ArkCollapsible } from "@ark-ui/react";

export const CollapsibleRootProvider = React.forwardRef((props, ref) => {
  return <ArkCollapsible.RootProvider ref={ref} {...props} />;
});
