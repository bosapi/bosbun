<script lang="ts">
    let { data = {} }: { data?: Record<string, any> } = $props();
    const path = $derived((data as any)?.params?.catchall ?? "unknown");
</script>

<svelte:head>
    <title>404 — Not Found | Bunia Demo</title>
</svelte:head>

<div class="flex flex-col items-center justify-center py-24 text-center space-y-4">
    <p class="text-8xl font-bold text-destructive">404</p>
    <p class="text-xl text-muted-foreground">Page not found</p>
    <p class="text-sm font-mono text-muted-foreground">/{path}</p>
    <a href="/" class="mt-4 rounded-md border px-4 py-2 text-sm hover:bg-muted transition-colors">Go Home</a>
</div>
