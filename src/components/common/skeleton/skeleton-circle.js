import React from "react";

import { cx } from "@utils/cx";
import { Skeleton } from "./skeleton";

export const SkeletonCircle = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;

  return (
    <Skeleton
      ref={ref}
      className={cx("flex items-center justify-center shrink-0 grow-0 rounded-full", className)}
      {...rest}
    />
  );
});
