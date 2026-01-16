import React from "react";
import { HiColorSwatch } from "react-icons/hi";

import { ButtonPrimary } from "@components/compositions/ui/button";
import { EmptyState } from "@components/common/empty-state";
import { VStack, Stack, HStack } from "@components/common/stack";
import { Skeleton, SkeletonCircle, SkeletonText } from "@components/common/skeleton";

export function UserCardContainer(props) {
  const { children } = props;
  return <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-5">{children}</div>;
}

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

export function UserCardLoading() {
  return (
    <Stack className="bg-tw-bg-panel shadow-sm gap-6 rounded-md items-center p-6">
      <SkeletonCircle className="size-20" />
      <SkeletonText noOfLines={2} />
      <HStack className="w-full">
        <Skeleton className="h-9 w-1/2" />
        <Skeleton className="h-9 w-1/2" />
      </HStack>
    </Stack>
  );
}
