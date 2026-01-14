import React from "react";
import { Menu as ArkMenu } from "@ark-ui/react";

import { cx } from "@utils/cx";
import { CheckIcon } from "@icons";

export const MenuItemIndicator = React.forwardRef((props, ref) => {
  const { children = <CheckIcon className="size-4" />, className, ...rest } = props;

  return (
    <ArkMenu.ItemIndicator
      ref={ref}
      className={cx("absolute start-2 -translate-y-1/2 top-1/2", className)}
      {...rest}
    >
      {children}
    </ArkMenu.ItemIndicator>
  );
});
