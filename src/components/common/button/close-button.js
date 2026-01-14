import React from "react";

import { CloseIcon } from "@icons";
import { IconButton } from "./icon-button";

export const CloseButton = React.forwardRef((props, ref) => {
  const { children, variant = "ghost", ...rest } = props;
  return (
    <IconButton variant={variant} aria-label="Close" ref={ref} {...rest}>
      {children ?? <CloseIcon />}
    </IconButton>
  );
});
