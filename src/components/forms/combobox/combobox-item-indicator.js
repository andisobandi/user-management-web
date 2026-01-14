import React from "react";
import { Combobox as ArkCombobox } from "@ark-ui/react";

import { cx } from "@utils/cx";
import { CheckIcon } from "@icons";
import { useComboboxContext } from "./combobox-context";

export function ComboboxItemIndicator(props) {
  const { children = <CheckIcon />, className, ...rest } = props;

  const combobox = useComboboxContext();

  return (
    <ArkCombobox.ItemIndicator
      className={cx({ "flex items-center justify-center": combobox.size === "md" }, className)}
      {...rest}
    >
      {children}
    </ArkCombobox.ItemIndicator>
  );
}
