import React from "react";

export const Image = React.forwardRef((props, ref) => {
  const { alt, ...rest } = props;

  return <img alt={alt} ref={ref} {...rest} />;
});
