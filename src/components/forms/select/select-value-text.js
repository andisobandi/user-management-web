import React from "react";
import { Select as ArkSelect } from "@ark-ui/react";

import { cx } from "@utils/cx";

export const SelectValueText = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;

  return (
    <ArkSelect.ValueText
      ref={ref}
      className={cx("line-clamp-1 max-w-[80%]", className)}
      {...rest}
    />
  );
});
