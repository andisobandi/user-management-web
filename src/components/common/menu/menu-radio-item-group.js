import React from "react";
import { Menu as ArkMenu } from "@ark-ui/react";

export const MenuRadioItemGroup = React.forwardRef((props, ref) => {
  return <ArkMenu.RadioItemGroup ref={ref} {...props} />;
});
