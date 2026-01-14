import React from "react";

import { cx } from "@utils/cx";

export const PopoverHeader = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;

  return (
    <header
      ref={ref}
      className={cx(
        "pt-[var(--popover-padding)] ps-[var(--popover-padding)] pe-[var(--popover-padding)]",
        className
      )}
      {...rest}
    />
  );
});
