---
title: Kbd
description: Displays keyboard shortcut keys with a keycap style.
demo: KbdDemo
---

```bash
bosia add kbd
```

Renders a styled `<kbd>` element that looks like a keycap. Use `KbdGroup` to display key combinations with "+" separators.

## Preview

## Props

### Kbd

| Prop    | Type      | Default |
| ------- | --------- | ------- |
| `class` | `string`  | `""`    |

### KbdGroup

| Prop    | Type      | Default |
| ------- | --------- | ------- |
| `class` | `string`  | `""`    |

## Usage

```svelte
<script lang="ts">
  import { Kbd, KbdGroup } from "$lib/components/ui/kbd";
</script>

<Kbd>K</Kbd>

<KbdGroup><Kbd>⌘</Kbd><Kbd>K</Kbd></KbdGroup>

<KbdGroup><Kbd>Ctrl</Kbd><Kbd>Shift</Kbd><Kbd>P</Kbd></KbdGroup>
```
