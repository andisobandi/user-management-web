import React from "react";

import { cx } from "@utils/cx";
import { DataListProvider } from "./data-list-context";

export const DataListRoot = React.forwardRef((props, ref) => {
  const { className, size = "md", orientation = "vertical", variant = "subtle", ...rest } = props;

  const dataListProps = {
    size,
    orientation,
    variant,
  };

  return (
    <DataListProvider value={dataListProps}>
      <dl
        ref={ref}
        orientation={orientation}
        className={cx(
          {
            "flex flex-col": orientation === "horizontal" || orientation === "vertical",
            "gap-3": size === "sm",
            "gap-4": size === "md",
            "gap-5": size === "lg",
          },
          className
        )}
        {...rest}
      />
    </DataListProvider>
  );
});
