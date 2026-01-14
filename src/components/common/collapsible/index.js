import { CollapsibleRootProvider as RootProvider } from "./collapsible-root-provider";
import { CollapsibleRoot as Root } from "./collapsible-root";
import { CollapsibleTrigger as Trigger } from "./collapsible-trigger";
import { CollapsibleContent as Content } from "./collapsible-content";
import { CollapsibleIndicator as Indicator } from "./collapsible-indicator";

export { useCollapsible as useArkCollapsible } from "@ark-ui/react";

export const Collapsible = { RootProvider, Root, Trigger, Content, Indicator };
