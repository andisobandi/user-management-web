import React from "react";

import { Field as BaseField } from "@components/forms/field";

export const Field = React.forwardRef((props, ref) => {
  const { label, children, helperText, errorText, optionalText, ...rest } = props;
  return (
    <BaseField.Root ref={ref} {...rest}>
      {label && (
        <BaseField.Label className="font-normal text-tw-slate-500 dark:text-tw-navy-200">
          {label}
          <BaseField.RequiredIndicator fallback={optionalText} />
        </BaseField.Label>
      )}
      {children}
      {helperText && <BaseField.HelperText>{helperText}</BaseField.HelperText>}
      {errorText && <BaseField.ErrorText>{errorText}</BaseField.ErrorText>}
    </BaseField.Root>
  );
});
