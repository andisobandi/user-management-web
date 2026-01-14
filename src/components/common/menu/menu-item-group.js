import React from "react";
import { Menu as ArkMenu } from "@ark-ui/react";

export const MenuItemGroup = React.forwardRef((props, ref) => {
  return <ArkMenu.ItemGroup ref={ref} {...props} />;
});
