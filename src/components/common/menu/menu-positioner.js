import React from "react";
import { Menu as ArkMenu } from "@ark-ui/react";

export const MenuPositioner = React.forwardRef((props, ref) => {
  return <ArkMenu.Positioner ref={ref} {...props} />;
});
