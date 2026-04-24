<script lang="ts">
    import { cn } from "$lib/utils.ts";
    import type { Snippet } from "svelte";

    let {
        class: className = "",
        children,
        ...restProps
    }: {
        class?: string;
        children?: Snippet;
        [key: string]: any;
    } = $props();
</script>

<span
    class={cn(
        "inline-flex items-center gap-1 [&>:not(:first-child)]:before:mr-1 [&>:not(:first-child)]:before:content-['+'] [&>:not(:first-child)]:before:text-xs [&>:not(:first-child)]:before:text-muted-foreground",
        className,
    )}
    {...restProps}
>
    {@render children?.()}
</span>
