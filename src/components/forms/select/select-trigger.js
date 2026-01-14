import React from "react";
import { Select as ArkSelect } from "@ark-ui/react";

import { cx } from "@utils/cx";
import { useSelectContext } from "./select-context";
import { selectClasses } from "./select-styles";

export const SelectTrigger = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;

  const select = useSelectContext();
  const classes = selectClasses.getTriggerClasses(select);

  return (
    <ArkSelect.Trigger
      ref={ref}
      className={cx(classes, className)}
      style={{ "--input-height": "var(--select-trigger-height)" }}
      {...rest}
    />
  );
});
