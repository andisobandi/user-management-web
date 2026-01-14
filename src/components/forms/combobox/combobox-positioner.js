import React from "react";
import {
  Combobox as ArkCombobox,
  useComboboxContext as useArkComboboxContext,
} from "@ark-ui/react";

export function ComboboxPositioner(props) {
  const { className, ...rest } = props;

  const arkCombobox = useArkComboboxContext();
  const { style } = arkCombobox.getPositionerProps();

  const styles = {
    ...style,
    zIndex: 1500,
  };

  return <ArkCombobox.Positioner className={className} style={styles} {...rest} />;
}
