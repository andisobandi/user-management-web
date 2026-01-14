import { ComboboxRoot as Root } from "./combobox-root";
import { ComboboxRootProvider as RootProvider } from "./combobox-root-provider";
import { ComboboxLabel as Label } from "./combobox-label";
import { ComboboxControl as Control } from "./combobox-control";
import { ComboboxInput as Input } from "./combobox-input";
import { ComboboxIndicatorGroup as IndicatorGroup } from "./combobox-indicator-group";
import { ComboboxClearTrigger as ClearTrigger } from "./combobox-clear-trigger";
import { ComboboxTrigger as Trigger } from "./combobox-trigger";
import { ComboboxPositioner as Positioner } from "./combobox-positioner";
import { ComboboxContent as Content } from "./combobox-content";
import { ComboboxEmpty as Empty } from "./combobox-empty";
import { ComboboxItem as Item } from "./combobox-item";
import { ComboboxItemText as ItemText } from "./combobox-item-text";
import { ComboboxItemGroup as ItemGroup } from "./combobox-item-group";
import { ComboboxItemIndicator as ItemIndicator } from "./combobox-item-indicator";
import { ComboboxItemGroupLabel as ItemGroupLabel } from "./combobox-item-group-label";
import { ComboboxList as List } from "./combobox-list";

export { useCombobox as useArkCombobox } from "@ark-ui/react";

export const Combobox = {
  RootProvider,
  Root,
  Label,
  Control,
  Input,
  IndicatorGroup,
  ClearTrigger,
  Trigger,
  Positioner,
  Content,
  Empty,
  Item,
  ItemText,
  ItemGroup,
  ItemGroupLabel,
  ItemIndicator,
  List,
};
