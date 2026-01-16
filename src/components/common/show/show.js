import React from "react";

export function Show(props) {
  const { when, fallback, children } = props;
  let result;

  if (!when) {
    result = fallback;
  } else {
    result = typeof children === "function" ? children(when) : children;
  }

  return React.isValidElement(result) ? result : result;
}
