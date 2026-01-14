import React from "react";

import { cx } from "@utils/cx";

export const PopoverFooter = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;

  return (
    <footer
      ref={ref}
      className={cx(
        "flex items-center pb-[var(--popover-padding)] ps-[var(--popover-padding)] pe-[var(--popover-padding)]",
        className
      )}
      {...rest}
    />
  );
});
