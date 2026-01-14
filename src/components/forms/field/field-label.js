import React from "react";
import { Field as ArkField } from "@ark-ui/react";

import { cx } from "@utils/cx";
import { useFieldContext } from "./field-context";

export const FieldLabel = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;

  const field = useFieldContext();

  return (
    <ArkField.Label
      ref={ref}
      className={cx(
        "flex items-center text-start text-sm font-medium gap-1 select-none tw-disabled:opacity-50",
        {
          "flex-[0_0_var(--field-label-width,_80px)]": field.orientation === "horizontal",
        },
        className
      )}
      {...rest}
    />
  );
});
