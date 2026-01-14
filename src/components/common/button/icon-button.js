import React from "react";

import { cx } from "@utils/cx";
import { Button } from "./button";

export const IconButton = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;
  return <Button className={cx("p-0 tw-icon:text-[1.2em]", className)} ref={ref} {...rest} />;
});
