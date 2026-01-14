import React from "react";

import { cx } from "@utils/cx";
import { Stack } from "./stack";

export const VStack = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;
  return <Stack className={cx("items-center", className)} ref={ref} {...rest} />;
});
