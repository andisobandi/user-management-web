import React from "react";
import { Menu as ArkMenu } from "@ark-ui/react";

import { MenuArrowTip } from "./menu-arrow-tip";

export const MenuArrow = React.forwardRef((props, ref) => {
  const { children = <MenuArrowTip />, ...rest } = props;

  return (
    <ArkMenu.Arrow ref={ref} {...rest}>
      {children}
    </ArkMenu.Arrow>
  );
});
