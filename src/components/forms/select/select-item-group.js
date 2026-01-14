import React from "react";
import { Select as ArkSelect } from "@ark-ui/react";

import { cx } from "@utils/cx";
import { useSelectContext } from "./select-context";

export const SelectItemGroup = React.forwardRef((props, ref) => {
  const select = useSelectContext();
  return (
    <ArkSelect.ItemGroup
      ref={ref}
      className={cx("tw-first:mt-0", {
        "mt-1": select.size === "sm",
        "mt-1.5": select.size === "md",
        "mt-2": select.size === "lg",
      })}
      {...props}
    />
  );
});
