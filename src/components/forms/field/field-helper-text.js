import React from "react";
import { Field as ArkField } from "@ark-ui/react";

import { cx } from "@utils/cx";

export const FieldHelperText = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;

  return (
    <ArkField.HelperText
      ref={ref}
      className={cx("text-tw-fg-muted text-xs", className)}
      {...rest}
    />
  );
});
