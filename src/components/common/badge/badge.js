import React from "react";

import { cx } from "@utils/cx";
import { getBadgeClasses } from "./badge-styles";
import { useBadgeContext } from "./badge-context";

export const Badge = React.forwardRef((props, ref) => {
  const { children, variant, colorScheme, size, className, ...rest } = props;

  const badge = useBadgeContext();

  const badgeVariant = variant ?? badge?.variant ?? "subtle";
  const badgeColor = colorScheme ?? badge?.colorScheme ?? "gray";
  const badgeSize = size ?? badge?.size ?? "sm";

  const classes = getBadgeClasses({
    size: badgeSize,
    variant: badgeVariant,
    colorScheme: badgeColor,
  });

  return (
    <span ref={ref} className={cx(classes, className)} {...rest}>
      {children}
    </span>
  );
});
