import React from "react";
import { Menu as ArkMenu } from "@ark-ui/react";

import { cx } from "@utils/cx";

export const MenuItemGroupLabel = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;

  return (
    <ArkMenu.ItemGroupLabel
      ref={ref}
      className={cx("px-2 py-1.5 font-semibold text-sm", className)}
      {...rest}
    />
  );
});
