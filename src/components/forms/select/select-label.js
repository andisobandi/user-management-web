import React from "react";
import { Select as ArkSelect } from "@ark-ui/react";

export const SelectLabel = React.forwardRef((props, ref) => {
  return (
    <ArkSelect.Label
      ref={ref}
      className="font-medium select-none text-sm tw-disabled:tw-disabled-not-allowed"
      {...props}
    />
  );
});
