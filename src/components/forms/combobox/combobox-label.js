import React from "react";
import { Combobox as ArkCombobox } from "@ark-ui/react";

import { cx } from "@utils/cx";

export function ComboboxLabel(props) {
  const { className, ...rest } = props;
  return (
    <ArkCombobox.Label
      className={cx(
        "font-medium select-none text-sm tw-disabled:tw-disabled-not-allowed",
        className
      )}
      {...rest}
    />
  );
}
