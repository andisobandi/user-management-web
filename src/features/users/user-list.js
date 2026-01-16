import React from "react";

import { useUserContext } from "@context/user-context";
import { fetchUsers } from "@context/user-actions";
import {
  UserCardEmpty,
  UserCardLoading,
  UserCardContainer,
} from "@components/compositions/ui/user-card";
import { Show } from "@components/common/show";
import { UserListItem } from "./user-list-item";

export function UserList() {
  const { state, dispatch } = useUserContext();
  const { users, loading, isMutating } = state;

  React.useEffect(() => {
    fetchUsers(dispatch);
  }, [dispatch, isMutating]);

  return (
    <Show
      when={!loading && users.length > 0}
      fallback={
        !loading && users.length === 0 ? (
          <UserCardEmpty />
        ) : (
          <UserCardContainer>
            {Array.from({ length: 3 }).map((_, index) => (
              <UserCardLoading key={index} />
            ))}
          </UserCardContainer>
        )
      }
    >
      <UserCardContainer>
        {users.map((user) => (
          <UserListItem user={user} key={user.id} />
        ))}
      </UserCardContainer>
    </Show>
  );
}
