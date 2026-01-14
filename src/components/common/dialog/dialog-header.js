import React from "react";

import { cx } from "@utils/cx";

export const DialogHeader = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;

  return (
    <div
      ref={ref}
      className={cx("flex gap-2 grow-0 shrink basis-[0%] px-6 pt-6 pb-4", className)}
      {...rest}
    />
  );
});
