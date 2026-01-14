import React from "react";

import { cx } from "@utils/cx";

export const CardFooter = React.forwardRef((props, ref) => {
  const { children, className, ...rest } = props;

  return (
    <div
      ref={ref}
      className={cx(
        "flex items-center gap-2 px-[var(--card-padding)] pb-[var(--card-padding)]",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
});
