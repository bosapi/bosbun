<script lang="ts">
    import { Button } from "$registry/button";
    import { 
        DropdownMenu, 
        DropdownMenuTrigger, 
        DropdownMenuContent, 
        DropdownMenuItem,
        DropdownMenuSeparator 
    } from "$registry/dropdown-menu";
</script>

<DropdownMenu>
    <DropdownMenuTrigger asChild let:builder>
        <Button variant="outline" builders={[builder]}>Open Menu</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Logout</DropdownMenuItem>
    </DropdownMenuContent>
</DropdownMenu>
