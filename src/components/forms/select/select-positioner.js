import React from "react";
import { Select as ArkSelect, useSelectContext as useArkSelectContext } from "@ark-ui/react";

export const SelectPositioner = React.forwardRef((props, ref) => {
  const select = useArkSelectContext();

  const { style } = select.getPositionerProps();

  const styles = {
    ...style,
    zIndex: 1500,
  };

  return <ArkSelect.Positioner ref={ref} style={styles} {...props} />;
});
