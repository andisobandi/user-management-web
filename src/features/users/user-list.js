import React from "react";

import { useUserContext } from "@context/user-context";
import { API } from "@services/api";
import {
  UserCardEmpty,
  UserCardLoading,
  UserCardContainer,
} from "@components/compositions/ui/user-card";
import { Show } from "@components/common/show";
import { UserListItem } from "./user-list-item";

export function UserList() {
  const { state, dispatch } = useUserContext();
  const { users, loading } = state;

  React.useEffect(() => {
    const loadUsers = async () => {
      dispatch({ type: "SET_LOADING", payload: true });

      try {
        const data = await API.users();
        dispatch({ type: "SET_USERS", payload: data });
      } finally {
        dispatch({ type: "SET_LOADING", payload: false });
      }
    };

    loadUsers();
  }, [dispatch]);

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
