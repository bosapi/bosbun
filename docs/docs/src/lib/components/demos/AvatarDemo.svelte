<script lang="ts">
    import { Avatar, AvatarFallback, AvatarImage } from "$registry/avatar";
</script>

<div class="flex items-center gap-4">
    <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    <Avatar>
        <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
        <AvatarFallback>VL</AvatarFallback>
    </Avatar>
    <Avatar>
        <AvatarFallback>JD</AvatarFallback>
    </Avatar>
</div>
