import React from "react";
import { Select as ArkSelect } from "@ark-ui/react";

import { CloseIcon } from "@icons";
import { cx } from "@utils/cx";
import { useSelectContext } from "./select-context";
import { selectClasses } from "./select-styles";

export const SelectClearTrigger = React.forwardRef((props, ref) => {
  const { children = <CloseIcon className="w-[1em]" />, className, ...rest } = props;

  const select = useSelectContext();
  const classes = selectClasses.getClearTriggerClasses(select);

  return (
    <ArkSelect.ClearTrigger ref={ref} className={cx(classes, className)} {...rest}>
      {children}
    </ArkSelect.ClearTrigger>
  );
});
