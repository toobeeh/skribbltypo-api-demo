<script lang="ts">
    import type {MemberDto} from "../api";
    export let member: MemberDto;
</script>

<div>
    Logged in as <b>{member.userName}</b>
</div>