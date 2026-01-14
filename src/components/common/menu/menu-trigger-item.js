import React from "react";
import { Menu as ArkMenu } from "@ark-ui/react";

import { cx } from "@utils/cx";
import { useMenuContext } from "./menu-context";
import { menuClasses } from "./menu-styles";

export const MenuTriggerItem = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;

  const menu = useMenuContext();
  const classes = menuClasses.getItemClasses(menu);

  return <ArkMenu.TriggerItem ref={ref} className={cx(classes, className)} {...rest} />;
});
