import React from "react";
import { Combobox as ArkCombobox } from "@ark-ui/react";

import { cx } from "@utils/cx";

export function ComboboxItemGroup(props) {
  const { className, ...rest } = props;

  return (
    <ArkCombobox.ItemGroup
      className={cx("pb-[var(--combobox-item-padding-y)] last-of-type:pb-0", className)}
      {...rest}
    />
  );
}
