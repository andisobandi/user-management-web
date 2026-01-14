import React from "react";
import { NumberInput as ArkNumberInput } from "@ark-ui/react";

import { cx } from "@utils/cx";
import { NumberInputProvider } from "./number-input-context";

export const NumberInputRoot = React.forwardRef((props, ref) => {
  const {
    className,
    size = "md",
    variant = "outline",
    colorScheme = "gray",
    unstyled = false,
    ...rest
  } = props;

  const numberInputProps = {
    size,
    variant,
    colorScheme,
    unstyled,
  };

  const computedClass = !unstyled ? cx("relative z-0 isolate", className) : undefined;

  return (
    <NumberInputProvider value={numberInputProps}>
      <ArkNumberInput.Root ref={ref} {...(!unstyled && { className: computedClass })} {...rest} />
    </NumberInputProvider>
  );
});
