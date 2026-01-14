import React from "react";

import { cx } from "@utils/cx";

const alignItems = {
  "flex-start": "items-start",
  "flex-end": "items-end",
  center: "items-center",
  baseline: "items-baseline",
  stretch: "items-stretch",
};

const justifyContent = {
  normal: "justify-normal",
  "flex-start": "justify-start",
  "flex-end": "justify-end",
  center: "justify-center",
  "space-between": "justify-between",
  "space-around": "justify-around",
  "space-evenly": "justify-evenly",
  stretch: "justify-stretch",
};

const flexWrap = {
  wrap: "flex-wrap",
  "wrap-reverse": "flex-wrap-reverse",
  nowrap: "flex-nowrap",
};

const flexDirection = {
  row: "flex-row",
  "row-reverse": "flex-row-reverse",
  column: "flex-col",
  "column-reverse": "flex-col-reverse",
};

export const Flex = React.forwardRef((props, ref) => {
  const { className, align, justify, wrap, direction, inline, ...rest } = props;

  return (
    <div
      ref={ref}
      className={cx(
        flexDirection[direction],
        alignItems[align],
        justifyContent[justify],
        flexWrap[wrap],
        {
          "inline-flex": inline,
          flex: !inline,
        },
        className
      )}
      {...rest}
    />
  );
});
