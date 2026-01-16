import React from "react";
import { LuUser } from "react-icons/lu";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

import { Card } from "@components/common/card";
import { Stack } from "@components/common/stack";
import { Avatar } from "@components/common/avatar";
import { Text } from "@components/common/typography/text";
import { Button, IconButton } from "@components/common/button";
import { useUserContext } from "@context/user-context";

export function UserListItem(props) {
  const { dispatch } = useUserContext();
  const { user } = props;

  const openDialog = (user, mode) => {
    dispatch({ type: "SELECT_USER", payload: user });
    dispatch({ type: "SET_MODE", payload: mode });
  };

  return (
    <Card.Root variant="subtle" size="sm" className="bg-tw-bg-panel shadow-sm">
      <Card.Header className="items-end">
        <IconButton
          variant="ghost"
          size="xs"
          colorScheme="red"
          className="rounded-full tw-icon:size-5"
          onClick={() => openDialog(user, "delete")}
        >
          <RiDeleteBin6Line />
        </IconButton>
      </Card.Header>
      <Card.Body>
        <Stack className="mb-6 gap-3 items-center">
          <Avatar.Root size="2xl">
            <Avatar.Image src={user.avatar} />
            <Avatar.Fallback name={user.name} />
          </Avatar.Root>
          <Stack className="gap-0 items-center">
            <Text className="font-semibold text-lg">{user.name}</Text>
            <Text className="text-tw-fg-muted text-sm before:content-['@'] lowercase">
              {user.username}
            </Text>
          </Stack>
        </Stack>
        <Card.Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean imperdiet magna sed nulla
          convallis ultrices.
        </Card.Description>
      </Card.Body>
      <Card.Footer>
        <Button colorScheme="blue" variant="subtle" size="sm" className="flex-1">
          <LuUser />
          Profile
        </Button>
        <Button
          variant="subtle"
          size="sm"
          className="flex-1"
          onClick={() => openDialog(user, "edit")}
        >
          <FiEdit />
          Edit
        </Button>
      </Card.Footer>
    </Card.Root>
  );
}
