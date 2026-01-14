import React from "react";

import { cx } from "@utils/cx";
import { inputClasses } from "./input-styles";

export const InputAddon = React.forwardRef((props, ref) => {
  const { className, variant = "outline", size = "md", ...rest } = props;
  const classes = inputClasses.getInputAddonClasses({
    size,
    variant,
  });

  return <div className={cx(classes, className)} ref={ref} {...rest} />;
});
