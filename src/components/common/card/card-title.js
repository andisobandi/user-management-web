import React from "react";

import { cx } from "@utils/cx";
import { Heading } from "@components/common/typography/heading";
import { useCardContext } from "./card-context";
import { cardClasses } from "./card-styles";

export const CardTitle = React.forwardRef((props, ref) => {
  const { children, as = "h3", className, ...rest } = props;

  const card = useCardContext();
  const classes = cardClasses.getTitleClasses(card);

  return (
    <Heading ref={ref} as={as} className={cx(classes, className)} {...rest}>
      {children}
    </Heading>
  );
});
