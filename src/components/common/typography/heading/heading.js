import React from "react";

import { cx } from "@utils/cx";

export const Heading = React.forwardRef((props, ref) => {
  const { children, size = "xl", as: Tag = "h2", className, ...rest } = props;

  const headingSizes = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl",
    "7xl": "text-7xl",
  };

  return (
    <Tag
      ref={ref}
      className={cx("font-semibold last:mb-0", headingSizes[size], className)}
      {...rest}
    >
      {children}
    </Tag>
  );
});
