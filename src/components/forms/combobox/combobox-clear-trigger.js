import React from "react";
import { Combobox as ArkCombobox } from "@ark-ui/react";

import { cx } from "@utils/cx";
import { CloseIcon } from "@icons";

export function ComboboxClearTrigger(props) {
  const { children = <CloseIcon />, className, ...rest } = props;

  return (
    <ArkCombobox.ClearTrigger
      className={cx(
        "text-tw-fg-muted pointer-events-auto rounded-sm",
        "tw-focus-visible:outline",
        "tw-focus-visible:outline-2",
        "tw-focus-visible:outline-offset-0",
        "tw-focus-visible:outline-tw-gray-focus-ring",
        "tw-focus-visible:border-tw-gray-focus-ring",
        className
      )}
      {...rest}
    >
      {children}
    </ArkCombobox.ClearTrigger>
  );
}
