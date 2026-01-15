import React from "react";
import { LuUser } from "react-icons/lu";
import { IoIosMore } from "react-icons/io";

import { Card } from "@components/common/card";
import { Stack } from "@components/common/stack";
import { Avatar } from "@components/common/avatar";
import { Text } from "@components/common/typography/text";
import { Button, IconButton } from "@components/common/button";
import { Menu } from "@components/common/menu";
import { Portal } from "@components/common/portal";

export function ListUsers(props) {
  const { onEdit, onDelete } = props;

  return (
    <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-5">
      <Card.Root variant="subtle" size="sm" className="bg-tw-bg-panel shadow-sm">
        <Card.Header className="items-end">
          <Menu.Root positioning={{ placement: "bottom-end" }}>
            <Menu.Trigger asChild>
              <IconButton variant="ghost" size="xs" className="rounded-full tw-icon:size-5">
                <IoIosMore />
              </IconButton>
            </Menu.Trigger>
            <Portal>
              <Menu.Positioner>
                <Menu.Content>
                  <Menu.Item value="edit" onClick={() => onEdit(true)}>
                    Edit
                  </Menu.Item>
                  <Menu.Item
                    value="delete"
                    className="text-tw-fg-error tw-hover:bg-red-50"
                    onClick={() => onDelete(true)}
                  >
                    Delete
                  </Menu.Item>
                </Menu.Content>
              </Menu.Positioner>
            </Portal>
          </Menu.Root>
        </Card.Header>
        <Card.Body>
          <Stack className="mb-6 gap-3 items-center">
            <Avatar.Root size="2xl">
              <Avatar.Image src="https://images.unsplash.com/photo-1511806754518-53bada35f930" />
              <Avatar.Fallback name="Leanne Graham" />
            </Avatar.Root>
            <Stack className="gap-0 items-center">
              <Text className="font-semibold text-lg">Leanne Graham</Text>
              <Text className="text-tw-fg-muted text-sm before:content-['@'] lowercase">Bret</Text>
            </Stack>
          </Stack>
          <Card.Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean imperdiet magna sed
            nulla convallis ultrices.
          </Card.Description>
        </Card.Body>
        <Card.Footer className="flex-col items-stretch">
          <Button colorScheme="blue" variant="subtle" size="sm">
            <LuUser />
            Profile
          </Button>
        </Card.Footer>
      </Card.Root>
    </div>
  );
}
