import React from "react";
import { Field as ArkField } from "@ark-ui/react";

import { cx } from "@utils/cx";
import { inputClasses } from "./input-styles";

export const Input = React.forwardRef((props, ref) => {
  const {
    variant = "outline",
    size = "md",
    colorScheme = "gray",
    unstyled = false,
    className,
    ...rest
  } = props;

  const inputProps = {
    size,
    variant,
    colorScheme,
  };

  const computedClass = !unstyled
    ? cx(inputClasses.getInputClasses(inputProps), className)
    : undefined;

  return <ArkField.Input ref={ref} {...(!unstyled && { className: computedClass })} {...rest} />;
});
