import React from "react";
import { NumberInput as ArkNumberInput } from "@ark-ui/react";

import { cx } from "@utils/cx";
import { ChevronDownIcon } from "@icons";
import { useNumberInputContext } from "./number-input-context";
import { numberInputClasses } from "./number-input-styles";

export const NumberInputDecrementTrigger = React.forwardRef((props, ref) => {
  const { children = <ChevronDownIcon />, className, ...rest } = props;

  const numberInput = useNumberInputContext();

  const computedClass = !numberInput.unstyled
    ? cx(numberInputClasses.getDecrementTriggerClasses(numberInput), className)
    : undefined;

  return (
    <ArkNumberInput.DecrementTrigger
      ref={ref}
      style={{
        "--stepper-base-radius": "0.125rem",
        "--stepper-radius": "calc(var(--stepper-base-radius) + 1px)",
      }}
      {...(!numberInput.unstyled && { className: computedClass })}
      {...rest}
    >
      {children}
    </ArkNumberInput.DecrementTrigger>
  );
});
