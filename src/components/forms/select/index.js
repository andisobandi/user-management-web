import { Select as ArkSelect } from "@ark-ui/react";

import { SelectRoot as Root } from "./select-root";
import { SelectHiddenSelect as HiddenSelect } from "./select-hidden-select";
import { SelectLabel as Label } from "./select-label";
import { SelectControl as Control } from "./select-control";
import { SelectTrigger as Trigger } from "./select-trigger";
import { SelectValueText as ValueText } from "./select-value-text";
import { SelectIndicatorGroup as IndicatorGroup } from "./select-indicator-group";
import { SelectIndicator as Indicator } from "./select-indicator";
import { SelectPositioner as Positioner } from "./select-positioner";
import { SelectContent as Content } from "./select-content";
import { SelectItem as Item } from "./select-item";
import { SelectItemIndicator as ItemIndicator } from "./select-item-indicator";
import { SelectItemGroup as ItemGroup } from "./select-item-group";
import { SelectItemGroupLabel as ItemGroupLabel } from "./select-item-group-label";
import { SelectClearTrigger as ClearTrigger } from "./select-clear-trigger";
import { SelectItemText as ItemText } from "./select-item-text";

export { useSelectContext as useArkSelectContext } from "@ark-ui/react";

export const Select = {
  Root,
  HiddenSelect,
  Label,
  Control,
  Trigger,
  ValueText,
  IndicatorGroup,
  Indicator,
  Positioner,
  Content,
  Item,
  ItemIndicator,
  ItemGroup,
  ItemGroupLabel,
  ClearTrigger,
  ItemText,
  Context: ArkSelect.Context,
};
