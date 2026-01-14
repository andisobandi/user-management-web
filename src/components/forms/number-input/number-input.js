import React from "react";
import { NumberInput as ArkNumberInput } from "@ark-ui/react";

import { cx } from "@utils/cx";
import { useNumberInputContext } from "./number-input-context";
import { inputClasses } from "../input/input-styles";

export const NumberInput = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;

  const numberInput = useNumberInputContext();
  const classes = inputClasses.getInputClasses(numberInput);
  const numberInputClasses = cx(classes, "align-top pe-[calc(var(--stepper-width)+0.5rem)]");

  return <ArkNumberInput.Input ref={ref} className={cx(numberInputClasses, className)} {...rest} />;
});
