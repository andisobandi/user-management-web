import React from "react";
import { HiOutlineMail } from "react-icons/hi";

import { cx } from "@utils/cx";
import { Input, InputGroup } from "@components/forms/input";

export const EmailInput = React.forwardRef((props, ref) => {
  const { size = "sm", variant = "subtle", placeholder, ...rest } = props;

  const inputGroupClasses = cx(
    "tw-icon:size-5 text-tw-slate-400 peer-focus-visible:text-blue-600 peer-data-[invalid]:text-tw-fg-error",
    "dark:text-tw-navy-300 dark:peer-focus-visible:text-blue-500"
  );

  const inputClasses = cx(
    "peer bg-tw-slate-150 text-tw-slate-500 placeholder:text-tw-slate-400",
    "tw-focus-visible:outline-0 tw-focus-visible:border-blue-600 tw-focus-visible:outline-blue-600",
    "dark:bg-tw-navy-900/90 dark:text-tw-navy-200 dark:placeholder:text-tw-navy-300",
    "dark:tw-focus-visible:outline-blue-500 dark:tw-focus-visible:border-blue-500 dark:tw-focus-visible:bg-tw-navy-900 rounded-lg"
  );

  return (
    <InputGroup
      endElement={<HiOutlineMail />}
      endElementProps={{
        className: inputGroupClasses,
      }}
    >
      <Input
        ref={ref}
        variant={variant}
        size={size}
        placeholder={placeholder}
        className={inputClasses}
        {...rest}
      />
    </InputGroup>
  );
});
