import React from "react";
import { Field as ArkField } from "@ark-ui/react";

import { cx } from "@utils/cx";

export const FieldErrorText = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;

  return (
    <ArkField.ErrorText
      ref={ref}
      className={cx(
        "inline-flex items-center font-medium gap-1 text-tw-fg-error text-xs",
        className
      )}
      {...rest}
    />
  );
});
