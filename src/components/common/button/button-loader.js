import React from "react";

import { Spinner } from "../spinner";

export const ButtonLoader = React.forwardRef((props, ref) => {
  const {
    spinner = <Spinner size="sm" />,
    spinnerPlacement = "start",
    children,
    text,
    visible = true,
    ...rest
  } = props;

  if (!visible) return children;

  if (text) {
    return (
      <span ref={ref} className="contents" {...rest}>
        {spinnerPlacement === "start" && spinner}
        {text}
        {spinnerPlacement === "end" && spinner}
      </span>
    );
  }

  if (spinner) {
    return (
      <span ref={ref} className="contents" {...rest}>
        <div className="inline-flex absolute items-center justify-center top-1/2 start-1/2 -translate-y-1/2 -translate-x-1/2">
          {spinner}
        </div>
        <span className="opacity-0">{children}</span>
      </span>
    );
  }

  return (
    <span ref={ref} className="contents" {...rest}>
      {children}
    </span>
  );
});
