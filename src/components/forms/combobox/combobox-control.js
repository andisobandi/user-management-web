import React from "react";
import { Combobox as ArkCombobox } from "@ark-ui/react";

import { cx } from "@utils/cx";

export function ComboboxControl(props) {
  const { className, ...rest } = props;
  return <ArkCombobox.Control className={cx("relative", className)} {...rest} />;
}
