<script lang="ts">
    import { Input } from "$registry/input";
    
    let value = $state("");
</script>

<div class="flex flex-col gap-4 w-full max-w-xs">
    <Input type="text" placeholder="Enter text..." bind:value />
    <Input type="email" placeholder="Enter email..." />
    <Input type="password" placeholder="Enter password..." />
    <Input type="number" placeholder="Enter number..." />
    {#if value}
        <p class="text-sm text-muted-foreground">You entered: <strong>{value}</strong></p>
    {/if}
</div>
