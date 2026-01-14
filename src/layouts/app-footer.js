import React from "react";
import { Link } from "react-router-dom";

import { Text } from "@components/common/typography/text";
import { HStack } from "@components/common/stack";
import { Separator } from "@components/common/separator";

export function AppFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-slate-200 relative py-4 px-6 border-t">
      <div className="block md:flex md:justify-between text-slate-500">
        <Text className="text-xs md:text-sm">
          &copy; {currentYear} User Management. All Rights Reserved.
        </Text>
        <HStack>
          <Link className="text-xs md:text-sm" to="/terms">
            Terms
          </Link>
          <Separator orientation="vertical" className="h-4" />
          <Link className="text-xs md:text-sm" to="/policy">
            Privacy & Policy
          </Link>
        </HStack>
      </div>
    </footer>
  );
}
