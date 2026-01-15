import React from "react";
import { IoMdAdd } from "react-icons/io";

import { ButtonPrimary } from "@components/compositions/ui/button";
import { Stack } from "@components/common/stack";
import { Flex } from "@components/common/flex";
import { ListUsers } from "./list-users";
import { AddUsers } from "./add-users";
import { EditUsers } from "./edit-users";
import { DeleteUsers } from "./delete-users";

export function Users() {
  const [openAdd, setOpenAdd] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);

  const handleOpenAdd = (open) => {
    setOpenAdd(open);
  };

  const handleOpenEdit = (open) => {
    setOpenEdit(open);
  };

  const handleOpenDelete = (open) => {
    setOpenDelete(open);
  };

  return (
    <div className="space-y-5">
      <div className="rounded-md bg-white text-tw-foreground shadow-sm">
        <div className="p-6">
          <Stack className="lg:flex-row flex-wrap gap-6">
            <Flex className="flex-1 gap-3">
              <ButtonPrimary onClick={() => handleOpenAdd(true)}>
                <IoMdAdd />
                Add User
              </ButtonPrimary>
            </Flex>
          </Stack>
        </div>
      </div>
      <ListUsers onEdit={handleOpenEdit} onDelete={handleOpenDelete} />
      <AddUsers open={openAdd} onOpen={handleOpenAdd} />
      <EditUsers open={openEdit} onOpen={handleOpenEdit} />
      <DeleteUsers open={openDelete} onOpen={handleOpenDelete} />
    </div>
  );
}
