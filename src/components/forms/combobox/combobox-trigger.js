import React from "react";
import { Combobox as ArkCombobox } from "@ark-ui/react";

import { cx } from "@utils/cx";
import { ChevronDownIcon } from "@icons";
import { useComboboxContext } from "./combobox-context";
import { comboboxClasses } from "./combobox-styles";

export const ComboboxTrigger = React.forwardRef((props, ref) => {
  const { children = <ChevronDownIcon />, className, ...rest } = props;

  const combobox = useComboboxContext();
  const comboboxTriggerClasses = comboboxClasses.getTriggerClasses(combobox);

  return (
    <ArkCombobox.Trigger
      ref={ref}
      className={cx(comboboxTriggerClasses, className)}
      style={{ "--input-height": "var(--combobox-input-height)" }}
      {...rest}
    >
      {children}
    </ArkCombobox.Trigger>
  );
});
