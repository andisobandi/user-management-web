import React from "react";
import { LuX } from "react-icons/lu";

import { IconButton } from "@components/common/button";

export function CloseButton(props, ref) {
  const { children } = props;
  return (
    <IconButton variant="ghost" aria-label="Close" ref={ref} {...props}>
      {children ?? <LuX />}
    </IconButton>
  );
}
