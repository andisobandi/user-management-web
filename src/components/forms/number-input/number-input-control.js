import React from "react";
import { NumberInput as ArkNumberInput } from "@ark-ui/react";

import { cx } from "@utils/cx";
import { useNumberInputContext } from "./number-input-context";
import { NumberInputIncrementTrigger } from "./number-input-increment-trigger";
import { NumberInputDecrementTrigger } from "./number-input-decrement-trigger";
import { numberInputClasses } from "./number-input-styles";

export const NumberInputControl = React.forwardRef((props, ref) => {
  const {
    children = (
      <React.Fragment>
        <NumberInputIncrementTrigger />
        <NumberInputDecrementTrigger />
      </React.Fragment>
    ),
    className,
    ...rest
  } = props;

  const numberInput = useNumberInputContext();
  const classes = numberInputClasses.getControlClasses(numberInput);

  const stepperWidthMap = {
    xs: "1rem",
    sm: "1.25rem",
    md: "1.5rem",
    lg: "1.5rem",
  };

  return (
    <ArkNumberInput.Control
      ref={ref}
      className={cx(classes, className)}
      style={{ "--stepper-width": stepperWidthMap[numberInput.size] }}
      {...rest}
    >
      {children}
    </ArkNumberInput.Control>
  );
});
