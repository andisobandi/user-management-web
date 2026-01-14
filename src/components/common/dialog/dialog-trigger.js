import React from "react";
import { Dialog as ArkDialog } from "@ark-ui/react";

export const DialogTrigger = React.forwardRef((props, ref) => {
  return <ArkDialog.Trigger ref={ref} {...props} />;
});
