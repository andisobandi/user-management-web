import React from "react";

import { Skeleton, SkeletonCircle, SkeletonText } from "@components/common/skeleton";
import { Stack, HStack } from "@components/common/stack";

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
