import React from "react";

import { cx } from "@utils/cx";
import { dataAttr } from "@utils/attr-utils";
import { groupClasses } from "./group-styles";

export const Group = React.forwardRef((props, ref) => {
  const {
    children,
    attached = false,
    grow = false,
    orientation = "horizontal",
    className,
    skip,
    stacking,
    ...rest
  } = props;

  const _children = React.useMemo(() => {
    const childArray = React.Children.toArray(children).filter(React.isValidElement);
    if (childArray.length === 1) return childArray;

    const validChildArray = childArray.filter((child) => !skip?.(child));
    const validChildCount = validChildArray.length;
    if (validChildArray.length === 1) return childArray;

    return childArray.map((child) => {
      const childProps = child.props;
      if (skip?.(child)) return child;
      const index = validChildArray.indexOf(child);
      return React.cloneElement(child, {
        ...childProps,
        "data-group-item": "",
        "data-first": dataAttr(index === 0),
        "data-last": dataAttr(index === validChildCount - 1),
        "data-between": dataAttr(index > 0 && index < validChildCount - 1),
        style: {
          "--group-count": validChildCount,
          "--group-index": index,
          ...(childProps?.style ?? {}),
        },
      });
    });
  }, [children, skip]);

  const groupProps = {
    orientation,
    attached,
    grow,
    stacking,
  };

  const classes = groupClasses.getRootClasses(groupProps);

  return (
    <div ref={ref} className={cx(classes, className)} {...rest}>
      {_children}
    </div>
  );
});
