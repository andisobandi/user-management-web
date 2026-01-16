import React from "react";
import { HiOutlineMail } from "react-icons/hi";

import { cx } from "@utils/cx";
import { Input as BaseInput, InputGroup as BaseInputGroup } from "@components/forms/input";

export const EmailInput = React.forwardRef((props, ref) => {
  const { size = "sm", variant = "outline", placeholder, ...rest } = props;

  return (
    <BaseInputGroup
      endElement={<HiOutlineMail />}
      endElementProps={{
        className:
          "tw-icon:size-5 text-tw-slate-400 peer-focus-visible:text-blue-600 peer-data-[invalid]:text-tw-fg-error",
      }}
    >
      <BaseInput
        ref={ref}
        variant={variant}
        size={size}
        placeholder={placeholder}
        className={cx(
          "peer text-tw-slate-500 placeholder:text-tw-slate-400",
          "tw-focus-visible:outline-0 tw-focus-visible:border-blue-600 tw-focus-visible:outline-blue-600"
        )}
        {...rest}
      />
    </BaseInputGroup>
  );
});

export const TextInput = React.forwardRef((props, ref) => {
  const { size = "sm", variant = "outline", placeholder, ...rest } = props;
  return (
    <BaseInput
      ref={ref}
      variant={variant}
      size={size}
      placeholder={placeholder}
      className={cx(
        "peer text-tw-slate-500 placeholder:text-tw-slate-400",
        "tw-focus-visible:outline-0 tw-focus-visible:border-blue-600 tw-focus-visible:outline-blue-600"
      )}
      {...rest}
    />
  );
});
