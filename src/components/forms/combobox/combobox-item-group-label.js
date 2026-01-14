import React from "react";
import { Combobox as ArkCombobox } from "@ark-ui/react";

import { cx } from "@utils/cx";

export function ComboboxItemGroupLabel(props) {
  const { className, ...rest } = props;

  return (
    <ArkCombobox.ItemGroupLabel
      className={cx(
        "font-medium py-[var(--combobox-item-padding-y)] px-[var(--combobox-item-padding-x)]",
        className
      )}
      {...rest}
    />
  );
}
