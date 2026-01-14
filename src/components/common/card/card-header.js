import React from "react";

import { cx } from "@utils/cx";

export const CardHeader = React.forwardRef((props, ref) => {
  const { children, className, ...rest } = props;

  return (
    <div
      ref={ref}
      className={cx(
        "flex flex-col gap-1.5 px-[var(--card-padding)] pt-[var(--card-padding)]",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
});
