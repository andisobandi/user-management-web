import React from "react";

import { cx } from "@utils/cx";

export const DialogFooter = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;

  return (
    <div
      ref={ref}
      className={cx("flex items-center justify-end gap-3 px-6 pt-2 pb-4", className)}
      {...rest}
    />
  );
});
