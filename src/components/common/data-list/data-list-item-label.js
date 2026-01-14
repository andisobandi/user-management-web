import React from "react";

import { cx } from "@utils/cx";
import { useDataListContext } from "./data-list-context";

export const DataListItemLabel = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;

  const dataList = useDataListContext();

  return (
    <dt
      ref={ref}
      className={cx(
        "flex items-center gap-1",
        {
          "min-w-[120px]": dataList.orientation === "horizontal",
          "text-tw-fg-muted": dataList.variant === "subtle",
          "font-medium": dataList.variant === "bold",
        },
        className
      )}
      {...rest}
    />
  );
});
