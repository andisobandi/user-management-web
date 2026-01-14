import React from "react";

import { cx } from "@utils/cx";
import { Stack } from "@components/common/stack";
import { Skeleton } from "./skeleton";

export const SkeletonText = React.forwardRef((props, ref) => {
  const { noOfLines = 3, gap, className, rootProps, ...rest } = props;

  return (
    <Stack className="w-full" ref={ref} {...rootProps}>
      {Array.from({ length: noOfLines }).map((_, index) => (
        <Skeleton
          className={cx(
            "h-4",
            {
              "tw-last:max-w-[80%]": noOfLines !== 1,
              "tw-last:max-w-full": noOfLines === 1,
            },
            className
          )}
          key={index}
          {...rest}
        />
      ))}
    </Stack>
  );
});
