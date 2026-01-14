import React from "react";

import { cx } from "@utils/cx";
import { EmptyStateProvider } from "./empty-state-context";

export const EmptyStateRoot = React.forwardRef((props, ref) => {
  const { className, size = "md", ...rest } = props;

  return (
    <EmptyStateProvider value={{ size }}>
      <div
        ref={ref}
        className={cx("w-full", {
          "py-6 px-4": size === "sm",
          "py-12 px-8": size === "md",
          "py-16 px-12": size === "lg",
        })}
        {...rest}
      />
    </EmptyStateProvider>
  );
});
