import React from "react";

import { cx } from "@utils/cx";
import { useEmptyStateContext } from "./empty-state-context";

export const EmptyStateIndicator = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;

  const { size } = useEmptyStateContext();

  return (
    <div
      ref={ref}
      className={cx("flex items-center justify-center text-tw-fg-subtle tw-icon:size-[1em]", {
        "text-2xl": size === "sm",
        "text-4xl": size === "md",
        "text-6xl": size === "lg",
      })}
      {...rest}
    />
  );
});
