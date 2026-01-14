import React from "react";
import { Select as ArkSelect } from "@ark-ui/react";

import { cx } from "@utils/cx";
import { ChevronDownIcon } from "@icons";
import { useSelectContext } from "./select-context";

export const SelectIndicator = React.forwardRef((props, ref) => {
  const { children = <ChevronDownIcon />, className, ...rest } = props;

  const select = useSelectContext();

  return (
    <ArkSelect.Indicator
      ref={ref}
      className={cx(
        "flex items-center justify-center text-tw-fg-muted tw-disabled:text-tw-fg-muted tw-invalid:text-tw-fg-warning",
        {
          "tw-icon:size-3.5": select.size === "xs",
          "tw-icon:size-4": select.size === "sm" || select.size === "md",
          "tw-icon:size-5": select.size === "lg",
        },
        className
      )}
      {...rest}
    >
      {children}
    </ArkSelect.Indicator>
  );
});
