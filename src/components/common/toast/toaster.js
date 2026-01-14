import React from "react";
import { Toaster as ArkToaster } from "@ark-ui/react";

export const Toaster = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;

  return <ArkToaster ref={ref} className={className} {...rest} />;
});
