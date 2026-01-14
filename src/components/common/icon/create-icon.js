import React from "react";

import { Icon } from "./icon";

export const createIcon = (options) => {
  const { viewBox = "0 0 24 24", d: pathDefinition, displayName, defaultProps = {} } = options;

  const path = React.Children.toArray(options.path);

  const Comp = React.forwardRef((props, ref) => (
    <Icon ref={ref} viewBox={viewBox} {...defaultProps} {...props}>
      {path.length ? path : <path fill="currentColor" d={pathDefinition} />}
    </Icon>
  ));

  Comp.displayName = displayName;

  return Comp;
};
