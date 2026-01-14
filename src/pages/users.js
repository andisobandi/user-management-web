import React from "react";

function Users() {
  React.useEffect(() => {
    document.title = "Users";
  }, []);

  return <h3 className="text-xl">Users</h3>;
}

export default Users;
