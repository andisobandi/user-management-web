import React from "react";

import { cx } from "@utils/cx";
import { CardProvider } from "./card-context";
import { cardClasses } from "./card-styles";

export const CardRoot = React.forwardRef((props, ref) => {
  const { children, className, variant = "outline", size = "md", ...rest } = props;

  const cardProps = {
    variant,
    size,
  };

  const styleMap = {
    sm: "1rem",
    md: "1.5rem",
    lg: "1.75rem",
  };

  const classes = cardClasses.getRootClasses(cardProps);

  const rootStyles = {
    "--card-padding": styleMap[size],
  };

  return (
    <CardProvider value={cardProps}>
      <div ref={ref} className={cx(classes, className)} style={rootStyles} {...rest}>
        {children}
      </div>
    </CardProvider>
  );
});
