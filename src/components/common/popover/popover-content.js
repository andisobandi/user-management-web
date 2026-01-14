import React from "react";
import { Popover as ArkPopover } from "@ark-ui/react";

import { cx } from "@utils/cx";
import { usePopoverContext } from "./popover-context";
import { popoverClasses } from "./popover-styles";

export const PopoverContent = React.forwardRef((props, ref) => {
  const { className, style, ...rest } = props;

  const popover = usePopoverContext();
  const classes = popoverClasses.getContentClasses();

  const spacingClasses = {
    xs: "0.75rem",
    sm: "1rem",
    md: "1.25rem",
    lg: "1.5rem",
  };

  return (
    <ArkPopover.Content
      ref={ref}
      className={cx(classes, className)}
      style={{
        "--popover-size": "20rem",
        "--popover-mobile-size": "calc(100dvw - 1rem)",
        "--popover-padding": spacingClasses[popover.size],
        "--popover-bg": "#fff",
        ...style,
      }}
      {...rest}
    />
  );
});
