import React from "react";

export function UserCardContainer(props) {
  const { children } = props;
  return <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-5">{children}</div>;
}
