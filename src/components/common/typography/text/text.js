import React from "react";

import { cx } from "@utils/cx";

export const Text = React.forwardRef((props, ref) => {
  const { children, className, as: Tag = "p", ...rest } = props;

  return (
    <Tag ref={ref} className={cx(className)} {...rest}>
      {children}
    </Tag>
  );
});
