import React from "react";

import { Group } from "@components/common/group";
import { ButtonProvider } from "./button-context";

export const ButtonGroup = React.forwardRef((props, ref) => {
  const { children, attached = false, grow = false, ...rest } = props;

  const groupProps = {
    attached,
    grow,
  };

  return (
    <ButtonProvider value={rest}>
      <Group ref={ref} {...groupProps}>
        {children}
      </Group>
    </ButtonProvider>
  );
});
