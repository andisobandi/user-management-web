import React from "react";

export function Preload() {
  return (
    <div className="app-preloader fixed z-50 grid h-full w-full place-content-center bg-tw-slate-50 dark:bg-tw-navy-900">
      <div className="app-preloader-inner relative inline-block size-48" />
    </div>
  );
}

const Users = React.lazy(() => import(/* webpackChunkName: "component-users" */ "./users"));

const pages = {
  Users: <Users />,
};

export default pages;
