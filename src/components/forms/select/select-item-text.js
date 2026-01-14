import React from "react";
import { Select as ArkSelect } from "@ark-ui/react";

export const SelectItemText = React.forwardRef((props, ref) => {
  return <ArkSelect.ItemText ref={ref} className="flex-1" {...props} />;
});
