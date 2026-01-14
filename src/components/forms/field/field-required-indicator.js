import React from "react";
import { Field as ArkField } from "@ark-ui/react";

import { cx } from "@utils/cx";

export const FieldRequiredIndicator = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;

  return (
    <ArkField.RequiredIndicator
      ref={ref}
      className={cx("text-tw-fg-error leading-none", className)}
      {...rest}
    />
  );
});
