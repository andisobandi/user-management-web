import React from "react";

import { cx } from "@utils/cx";

function getValidChildren(children) {
  return React.Children.toArray(children).filter((child) => React.isValidElement(child));
}

export const Stack = React.forwardRef((props, ref) => {
  const { children, separator, className, ...rest } = props;

  const clones = React.useMemo(() => {
    if (!separator) return children;
    return getValidChildren(children).map((child, index, arr) => {
      const key = typeof child.key !== "undefined" ? child.key : index;
      const sep = React.cloneElement(separator);
      return (
        <React.Fragment key={key}>
          {child}
          {index === arr.length - 1 ? null : sep}
        </React.Fragment>
      );
    });
  }, [children, separator]);

  return (
    <div ref={ref} className={cx("flex flex-col gap-2", className)} {...rest}>
      {clones}
    </div>
  );
});
