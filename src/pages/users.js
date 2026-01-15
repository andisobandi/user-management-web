import React from "react";

import { Users as UserFeatures } from "@features/users";

function Users() {
  React.useEffect(() => {
    document.title = "Users";
  }, []);

  return <UserFeatures />;
}

export default Users;
