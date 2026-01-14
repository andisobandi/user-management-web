import React from "react";
import { Menu as ArkMenu } from "@ark-ui/react";

import { cx } from "@utils/cx";

export const MenuItemText = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;

  return <ArkMenu.ItemText ref={ref} className={cx("flex-1", className)} {...rest} />;
});
