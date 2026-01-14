import React from "react";
import { NumberInput as ArkNumberInput } from "@ark-ui/react";

export const NumberInputScrubber = React.forwardRef((props, ref) => {
  return <ArkNumberInput.Scrubber ref={ref} {...props} />;
});
