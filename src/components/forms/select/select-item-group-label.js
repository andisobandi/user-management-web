import React from "react";
import { Select as ArkSelect } from "@ark-ui/react";

import { cx } from "@utils/cx";
import { useSelectContext } from "./select-context";

export const SelectItemGroupLabel = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;

  const select = useSelectContext();

  return (
    <ArkSelect.ItemGroupLabel
      ref={ref}
      className={cx(
        "py-1 font-medium",
        {
          "py-1 px-2": select.size === "xs",
          "py-1 px-1.5": select.size === "sm",
          "py-1.5 px-2": select.size === "md",
          "py-2 px-3": select.size === "lg",
        },
        className
      )}
      {...rest}
    />
  );
});
