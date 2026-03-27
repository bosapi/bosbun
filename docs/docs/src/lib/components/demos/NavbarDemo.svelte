<script lang="ts">
    import { Button } from "$registry/button";
</script>

<div class="w-full border-b border-border">
    <div class="flex h-14 items-center justify-between px-4">
        <div class="flex items-center gap-2 font-semibold">
            <div class="h-6 w-6 rounded bg-primary"></div>
            <span>Navbar</span>
        </div>
        <nav class="flex gap-2">
            <Button variant="ghost" size="sm">Home</Button>
            <Button variant="ghost" size="sm">Docs</Button>
            <Button variant="ghost" size="sm">About</Button>
        </nav>
        <Button variant="outline" size="sm">Sign In</Button>
    </div>
</div>
