import React from "react";

import { cx } from "@utils/cx";
import { getBadgeClasses } from "./badge-styles";
import { useBadgeContext } from "./badge-context";

export const Badge = React.forwardRef((props, ref) => {
  const { children, variant, colorScheme, size, className, ...rest } = props;

  const badge = useBadgeContext();

  const getBadgeVariant = () => {
    if (variant) {
      return variant;
    }

    if (badge && badge.variant) {
      return badge.variant;
    }

    return "subtle";
  };

  const getBadgeColor = () => {
    if (colorScheme) {
      return colorScheme;
    }

    if (badge && badge.color) {
      return badge.colorScheme;
    }

    return "gray";
  };

  const getBadgeSize = () => {
    if (size) {
      return size;
    }

    if (badge && badge.size) {
      return badge.size;
    }

    return "sm";
  };

  const badgeSize = getBadgeSize();
  const badgeColor = getBadgeColor();
  const badgeVariant = getBadgeVariant();

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
