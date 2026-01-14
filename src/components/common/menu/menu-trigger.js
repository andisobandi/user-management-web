import React from "react";
import { Menu as ArkMenu } from "@ark-ui/react";

export const MenuTrigger = React.forwardRef((props, ref) => {
  return <ArkMenu.Trigger ref={ref} {...props} />;
});
