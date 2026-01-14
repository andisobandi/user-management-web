import React from "react";
import { Select as ArkSelect } from "@ark-ui/react";

import { cx } from "@utils/cx";
import { CheckIcon } from "@icons";

export const SelectItemIndicator = React.forwardRef((props, ref) => {
  const { children = <CheckIcon />, className, ...rest } = props;

  return (
    <ArkSelect.ItemIndicator
      ref={ref}
      className={cx("flex items-center justify-center tw-icon:size-4", className)}
      {...rest}
    >
      {children}
    </ArkSelect.ItemIndicator>
  );
});
