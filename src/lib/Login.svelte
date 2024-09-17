<script>
    /* handler for window messages */
    import {ApiFactory} from "../util/apiFactory";

    const listenOnce = () => {
        window.addEventListener("message", async event => {
            if (!event.data || !event.data.accessToken || event.data.accessToken == "") listenOnce();
            else {
                const accessToken = event.data.accessToken;
                console.log("Logged in with token: ", accessToken);
                ApiFactory.authToken.set(accessToken);
            }
        }, { once: true });
    }

    /* init login */
    const login = () => {
        listenOnce()
        window.open('https://www.typo.rip/auth/', 'Log in to Palantir', 'height=650,width=500,right=0,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes');
    }
</script>

<style>
    div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>

<div>
    <input type="button" on:click={login} value="Log in with Typo" />
</div>