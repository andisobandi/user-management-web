import React from "react";
import { Menu as ArkMenu } from "@ark-ui/react";

export const MenuArrowTip = React.forwardRef((props, ref) => {
  return <ArkMenu.ArrowTip ref={ref} {...props} />;
});
