import React from "react";
import { NumberInput as ArkNumberInput } from "@ark-ui/react";

export const NumberInputLabel = React.forwardRef((props, ref) => {
  return <ArkNumberInput.Label ref={ref} {...props} />;
});
