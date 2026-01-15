import React from "react";
import { Link } from "react-router-dom";

import { cx } from "@utils/cx";
import { Button } from "@components/common/button";

export const ButtonPrimary = React.forwardRef((props, ref) => {
  const { children, size = "sm", variant = "solid", className, ...rest } = props;
  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cx("rounded-lg bg-blue-600 tw-hover:bg-blue-600/80", className)}
      {...rest}
    >
      {children}
    </Button>
  );
});

export const ButtonLink = React.forwardRef((props, ref) => {
  const { children, className, to, ...rest } = props;
  return (
    <Link
      ref={ref}
      to={to}
      className={cx(
        "inline-flex h-9 min-w-9 shrink-0 items-center justify-center",
        "gap-2 rounded-lg px-3.5 align-middle font-medium transition-colors text-blue-600",
        "tw-icon:shrink-0 tw-icon:size-4 tw-hover:text-blue-600/80"
      )}
      {...rest}
    >
      {children}
    </Link>
  );
});
