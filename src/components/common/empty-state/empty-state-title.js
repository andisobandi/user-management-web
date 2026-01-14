import React from "react";

import { cx } from "@utils/cx";
import { useEmptyStateContext } from "./empty-state-context";

export const EmptyStateTitle = React.forwardRef((props, ref) => {
  const { children, className, ...rest } = props;

  const { size } = useEmptyStateContext();

  return (
    <h3
      ref={ref}
      className={cx("font-semibold", {
        "text-base": size === "sm",
        "text-lg": size === "md",
        "text-xl": size === "lg",
      })}
      {...rest}
    >
      {children}
    </h3>
  );
});
