import React from "react";
import { Combobox as ArkCombobox } from "@ark-ui/react";

import { cx } from "@utils/cx";

export function ComboboxItemText(props) {
  const { className, ...rest } = props;

  return <ArkCombobox.ItemText className={cx("flex-1", className)} {...rest} />;
}
