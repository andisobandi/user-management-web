import React from "react";
import { Combobox as ArkCombobox } from "@ark-ui/react";

import { cx } from "@utils/cx";
import { comboboxClasses } from "./combobox-styles";

export function ComboboxItem(props) {
  const { className, ...rest } = props;
  const classes = comboboxClasses.getItemClasses();

  return <ArkCombobox.Item className={cx(classes, className)} {...rest} />;
}
