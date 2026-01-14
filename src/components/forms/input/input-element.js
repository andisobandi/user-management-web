import React from "react";

import { cx } from "@utils/cx";

export function InputElement(props) {
  const { children, placement = "start", className, ...rest } = props;

  return (
    <div
      className={cx(
        "flex items-center justify-center absolute z-10 text-tw-fg-muted h-full text-sm px-3",
        { "start-0": placement === "start", "end-0": placement === "end" },
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
