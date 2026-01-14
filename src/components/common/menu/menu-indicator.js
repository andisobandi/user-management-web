import React from "react";
import { Menu as ArkMenu } from "@ark-ui/react";

import { cx } from "@utils/cx";

export const MenuIndicator = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;

  return (
    <ArkMenu.Indicator
      ref={ref}
      className={cx("inline-flex items-center justify-center shrink-0", className)}
      {...rest}
    />
  );
});
