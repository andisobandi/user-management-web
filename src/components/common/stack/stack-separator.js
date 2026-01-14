import React from "react";

import { cx } from "@utils/cx";

export function StackSeparator(props) {
  const { className } = props;
  return <div className={cx(className)} />;
}
