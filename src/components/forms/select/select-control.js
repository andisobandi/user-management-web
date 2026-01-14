import React from "react";
import { Select as ArkSelect } from "@ark-ui/react";

export const SelectControl = React.forwardRef((props, ref) => {
  return <ArkSelect.Control ref={ref} className="relative" {...props} />;
});
