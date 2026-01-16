import React from "react";
import { HiColorSwatch } from "react-icons/hi";

import { ButtonPrimary } from "@components/compositions/ui/button";
import { EmptyState } from "@components/common/empty-state";
import { VStack } from "@components/common/stack";

export function UserCardEmpty() {
  return (
    <div className="rounded-md bg-white text-tw-foreground shadow-sm p-6">
      <EmptyState.Root size="lg">
        <EmptyState.Content>
          <EmptyState.Indicator>
            <HiColorSwatch />
          </EmptyState.Indicator>
          <VStack className="text-center">
            <EmptyState.Title>Oops!</EmptyState.Title>
            <EmptyState.Description>No data found</EmptyState.Description>
          </VStack>
          <ButtonPrimary>Try again</ButtonPrimary>
        </EmptyState.Content>
      </EmptyState.Root>
    </div>
  );
}
