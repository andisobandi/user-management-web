import React from "react";

import { cx } from "@utils/cx";
import { useDataListContext } from "./data-list-context";

export const DataListItem = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;

  const dataList = useDataListContext();

  return (
    <div
      ref={ref}
      className={cx(
        {
          "inline-flex items-center gap-4": dataList.orientation === "horizontal",
          "flex flex-col gap-1": dataList.orientation === "vertical",
          "text-xs": dataList.size === "sm",
          "text-sm": dataList.size === "md",
          "text-base": dataList.size === "lg",
        },
        className
      )}
      {...rest}
    />
  );
});
