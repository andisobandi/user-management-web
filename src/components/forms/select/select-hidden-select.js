import React from "react";
import { Select as ArkSelect } from "@ark-ui/react";

export const SelectHiddenSelect = React.forwardRef((props, ref) => {
  return <ArkSelect.HiddenSelect ref={ref} {...props} />;
});
