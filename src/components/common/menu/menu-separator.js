import React from "react";
import { Menu as ArkMenu } from "@ark-ui/react";

import { cx } from "@utils/cx";

export const MenuSeparator = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;

  return (
    <ArkMenu.Separator
      ref={ref}
      className={cx("h-px bg-tw-bg-muted my-1 -mx-1", className)}
      {...rest}
    />
  );
});
