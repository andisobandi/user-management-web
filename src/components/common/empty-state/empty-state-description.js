import React from "react";

import { cx } from "@utils/cx";

export const EmptyStateDescription = React.forwardRef((props, ref) => {
  const { children, className, ...rest } = props;

  return (
    <p ref={ref} className={cx("text-sm text-tw-fg-muted")} {...rest}>
      {children}
    </p>
  );
});
