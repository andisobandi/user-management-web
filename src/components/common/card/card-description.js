import React from "react";

import { cx } from "@utils/cx";

export const CardDescription = React.forwardRef((props, ref) => {
  const { children, className, ...rest } = props;

  return (
    <p ref={ref} className={cx("text-sm text-tw-fg-muted", className)} {...rest}>
      {children}
    </p>
  );
});
