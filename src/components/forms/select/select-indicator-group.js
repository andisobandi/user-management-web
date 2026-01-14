import React from "react";

import { cx } from "@utils/cx";

export const SelectIndicatorGroup = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;

  return (
    <div
      ref={ref}
      className={cx(
        "flex items-center gap-1 absolute end-0 top-0 bottom-0 pointer-events-none px-[var(--select-trigger-padding-x)]",
        className
      )}
      {...rest}
    />
  );
});
