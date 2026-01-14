import React from "react";
import { Collapsible as ArkCollapsible } from "@ark-ui/react";

import { cx } from "@utils/cx";

export const CollapsibleContent = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;
  return (
    <ArkCollapsible.Content
      className={cx(
        "overflow-hidden tw-open:animate-expand-height-fade-in tw-close:animate-collapse-height-fade-out",
        className
      )}
      ref={ref}
      {...rest}
    />
  );
});
