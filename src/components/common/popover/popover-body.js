import React from "react";

import { cx } from "@utils/cx";

export const PopoverBody = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;

  return <div ref={ref} className={cx("p-[var(--popover-padding)] flex-1", className)} {...rest} />;
});
