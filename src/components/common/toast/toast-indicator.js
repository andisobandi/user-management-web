import React from "react";
import { useToastContext as useArkToastContext } from "@ark-ui/react";

import { cx } from "@utils/cx";
import { CheckCircleIcon, WarningIcon } from "@icons";

const iconMap = {
  warning: WarningIcon,
  success: CheckCircleIcon,
  error: WarningIcon,
};

export const ToastIndicator = React.forwardRef((props, ref) => {
  const { unstyled, className, ...rest } = props;

  const api = useArkToastContext();
  const Component = iconMap[api.type];
  if (!Component) return null;

  const computedClass = !unstyled ? cx("shrink-0 size-5", className) : undefined;

  return <Component ref={ref} {...(!unstyled && { className: computedClass })} {...rest} />;
});
