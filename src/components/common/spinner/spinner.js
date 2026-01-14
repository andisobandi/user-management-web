import React from "react";

import { cx } from "@utils/cx";

export function Spinner(props) {
  const { size = "md", className, style, ...rest } = props;

  const spinnerSizeMap = {
    inherit: "1em",
    xs: "0.75rem",
    sm: "1rem",
    md: "1.25rem",
    lg: "2rem",
    xl: "2.5rem",
  };

  return (
    <span
      className={cx(
        "inline-block border-current border-2 border-solid rounded-full",
        "w-[var(--spinner-size)] h-[var(--spinner-size)]",
        "animate-[spin_500ms_linear_infinite]",
        "border-b-[var(--spinner-track-color)]",
        "border-s-[var(--spinner-track-color)]",
        className
      )}
      style={{
        "--spinner-track-color": "transparent",
        "--spinner-size": spinnerSizeMap[size],
        ...style,
      }}
      {...rest}
    />
  );
}
