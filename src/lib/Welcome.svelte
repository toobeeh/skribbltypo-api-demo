<script lang="ts">
    import type {MemberDto} from "../api";

    /*component input for member data*/
    export let member: MemberDto;
</script>

<div>

    <!--display user name-->
    Logged in as <b>{member.userName}</b>
</div>