import React from "react";

import { cx } from "@utils/cx";
import { useDataListContext } from "./data-list-context";

export const DataListItemValue = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;

  const dataList = useDataListContext();

  return (
    <dd
      ref={ref}
      className={cx(
        "flex min-w-0 flex-1",
        {
          "text-tw-fg-muted": dataList.variant === "bold",
        },
        className
      )}
      {...rest}
    />
  );
});
