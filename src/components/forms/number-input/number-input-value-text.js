import React from "react";
import { NumberInput as ArkNumberInput } from "@ark-ui/react";

import { cx } from "@utils/cx";

export const NumberInputValueText = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;

  return (
    <ArkNumberInput.ValueText
      ref={ref}
      className={cx("font-medium proportional-nums", className)}
      {...rest}
    />
  );
});
