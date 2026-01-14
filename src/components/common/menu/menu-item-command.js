import React from "react";

import { cx } from "@utils/cx";

export const MenuItemCommand = React.forwardRef((props, ref) => {
  const { children, className, ...rest } = props;

  return (
    <kbd
      ref={ref}
      className={cx("opacity-60 text-xs ms-auto ps-4 tracking-widest font-[inherit]", className)}
      {...rest}
    >
      {children}
    </kbd>
  );
});
