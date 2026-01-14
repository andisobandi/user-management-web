import React from "react";

import { Button } from "@components/common/button";
import { useDialogContext as useArkDialogContext } from "@ark-ui/react";

export const DialogActionTrigger = React.forwardRef((props, ref) => {
  const { children, className, ...rest } = props;

  const dialog = useArkDialogContext();

  return (
    children ?? (
      <Button variant="outline" ref={ref} onClick={() => dialog.setOpen(false)} {...rest}>
        Cancel
      </Button>
    )
  );
});
