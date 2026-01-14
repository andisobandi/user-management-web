import React from "react";
import { Menu as ArkMenu } from "@ark-ui/react";

import { cx } from "@utils/cx";

export const MenuContextTrigger = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;

  return <ArkMenu.ContextTrigger ref={ref} className={cx(className)} {...rest} />;
});
