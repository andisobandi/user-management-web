import React from "react";
import { Select as ArkSelect } from "@ark-ui/react";

import { cx } from "@utils/cx";
import { useSelectContext } from "./select-context";
import { selectClasses } from "./select-styles";

export const SelectContent = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;

  const select = useSelectContext();
  const classes = selectClasses.getContentClasses(select);

  return <ArkSelect.Content ref={ref} className={cx(classes, className)} {...rest} />;
});
