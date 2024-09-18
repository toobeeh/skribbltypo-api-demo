<script lang="ts">
  import Login from "./lib/Login.svelte";
  import {ApiFactory} from "./util/apiFactory";
  import {MembersApi} from "./api";
  import Welcome from "./lib/Welcome.svelte";
  import Randomizer from "./lib/Randomizer.svelte";

  /*create an api client*/
  const memberApi = ApiFactory.createApi(MembersApi);

  /*reference to token to listen for updates*/
  const token = ApiFactory.authToken;

</script>

<main>
  <h1>Typo Combo Randomizer</h1>

  {#if ($token === undefined)}

    <!-- if user token is not set, show the login button -->
    <Login />

  {:else }

    <!-- when token is set, load the member data from the api -->
    {#await memberApi.getAuthenticatedMember()}

      <!-- show a loading hint while loading -->
      <span>Loading member...</span>

    {:then member}

      <!-- show a welcome message with the member data -->
      <Welcome member="{member}" />

      <!-- show the randomizer -->
      <Randomizer member="{member}" />

    {/await}
  {/if}
</main>

