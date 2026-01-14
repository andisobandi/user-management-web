import React from "react";

import { cx } from "@utils/cx";

export const CardBody = React.forwardRef((props, ref) => {
  const { children, className, ...rest } = props;

  return (
    <div
      ref={ref}
      className={cx("flex-1 flex flex-col p-[var(--card-padding)]", className)}
      {...rest}
    >
      {children}
    </div>
  );
});
