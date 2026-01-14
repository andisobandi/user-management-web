import React from "react";

import { cx } from "@utils/cx";

export const Icon = React.forwardRef((props, ref) => {
  const { children, className, size = "inherit", ...rest } = props;

  const classes = cx(
    "inline-block leading-[1em] shrink-0 text-current align-middle",
    {
      "size-[inherit]": size === "inherit",
      "size-3": size === "xs",
      "size-4": size === "sm",
      "size-5": size === "md",
      "size-6": size === "lg",
      "size-7": size === "xl",
      "size-8": size === "2xl",
    },
    className
  );

  if (React.isValidElement(children)) {
    const childType = children.type;

    if (typeof childType === "function") {
      return React.cloneElement(children, {
        ref,
        className: cx(classes, children.props.className),
        ...rest,
      });
    }

    if (childType === "svg") {
      return React.cloneElement(children, {
        ref,
        className: cx(classes, children.props.className),
        ...rest,
      });
    }
  }

  return (
    <svg ref={ref} focusable={false} aria-hidden="true" className={classes} {...rest}>
      {children}
    </svg>
  );
});
