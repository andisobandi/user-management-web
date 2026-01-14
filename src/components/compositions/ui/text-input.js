import React from "react";

import { cx } from "@utils/cx";
import { Input as BaseInput } from "@components/forms/input";

export const TextInput = React.forwardRef((props, ref) => {
  const { size = "sm", variant = "subtle", placeholder, ...rest } = props;
  return (
    <BaseInput
      ref={ref}
      variant={variant}
      size={size}
      placeholder={placeholder}
      className={cx(
        "peer bg-tw-slate-150 text-tw-slate-500 placeholder:text-tw-slate-400",
        "tw-focus-visible:outline-0 tw-focus-visible:border-blue-600 tw-focus-visible:outline-blue-600",
        "dark:bg-tw-navy-900/90 dark:text-tw-navy-200 dark:placeholder:text-tw-navy-300",
        "dark:tw-focus-visible:outline-blue-500 dark:tw-focus-visible:border-blue-500 dark:tw-focus-visible:bg-tw-navy-900 rounded-lg"
      )}
      {...rest}
    />
  );
});
