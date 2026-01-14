import React from "react";

import { cx } from "@utils/cx";
import { useComboboxContext } from "./combobox-context";
import { comboboxClasses } from "./combobox-styles";

export function ComboboxIndicatorGroup(props) {
  const { className, ...rest } = props;

  const combobox = useComboboxContext();
  const classes = comboboxClasses.getIndicatorGroupClasses(combobox);

  return <div className={cx(classes, className)} {...rest} />;
}
