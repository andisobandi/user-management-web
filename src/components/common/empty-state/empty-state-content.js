import React from "react";

import { cx } from "@utils/cx";
import { useEmptyStateContext } from "./empty-state-context";

export const EmptyStateContent = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;

  const { size } = useEmptyStateContext();

  return (
    <div
      ref={ref}
      className={cx("flex flex-col items-center justify-center", {
        "gap-4": size === "sm",
        "gap-6": size === "md",
        "gap-8": size === "lg",
      })}
      {...rest}
    />
  );
});
