import React from "react";
import { Menu as ArkMenu } from "@ark-ui/react";

import { MenuProvider } from "./menu-context";

export const MenuRoot = React.forwardRef((props, ref) => {
  const {
    lazyMount = true,
    unmountOnExit = true,
    size = "md",
    variant = "subtle",
    colorScheme = "gray",
    ...rest
  } = props;

  const menuProps = {
    size,
    variant,
    colorScheme,
  };

  return (
    <MenuProvider value={menuProps}>
      <ArkMenu.Root ref={ref} lazyMount={lazyMount} unmountOnExit={unmountOnExit} {...rest} />
    </MenuProvider>
  );
});
