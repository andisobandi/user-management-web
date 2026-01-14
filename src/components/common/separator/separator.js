import React from "react";

import { cx } from "@utils/cx";

export const Separator = React.forwardRef((props, ref) => {
  const { className, size = "sm", variant = "solid", orientation = "horizontal", ...rest } = props;

  const classes = cx(
    "block border-tw-border-default",
    {
      "border-solid": variant === "solid",
      "border-dashed": variant === "dashed",
      "border-dotted": variant === "dotted",
      "border-s-[length:var(--separator-thickness)]": orientation === "vertical",
      "border-t-[length:var(--separator-thickness)]": orientation === "horizontal",
    },
    className
  );

  const separatorThickens = {
    xs: "0.5px",
    sm: "1px",
    md: "2px",
    lg: "23pxpx",
  };

  return (
    <span
      ref={ref}
      role="separator"
      aria-orientation={orientation}
      className={classes}
      style={{ "--separator-thickness": separatorThickens[size] }}
      {...rest}
    />
  );
});
