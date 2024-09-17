<script lang="ts">
    import {
        InventoryApi,
        type MemberDto,
        type SpriteDto, type SpriteInventoryDto,
        SpritesApi,
        type SpriteSlotDto
    } from "../api";
    import {ApiFactory} from "../util/apiFactory";

    /*component parameter to get the member which will be randomized*/
    export let member: MemberDto;

    /*get the api services to load data from*/
    const spriteApi = ApiFactory.createApi(SpritesApi);
    const inventoryApi = ApiFactory.createApi(InventoryApi);

    /**
     * Refresh the data from the api
     */
    function refreshData() {
        return Promise.all([
            spriteApi.getAllSprites(),
            inventoryApi.getMemberSpriteInventory({login: Number(member.userLogin)}),
            inventoryApi.getMemberSpriteSlotCount({login: Number(member.userLogin)})
        ]);
    }

    /**
     * Get the sprite names from the inventory
     * @param spriteInventory
     * @param allSprites
     */
    function getSpriteComboNames(spriteInventory: SpriteInventoryDto[], allSprites: SpriteDto[]) {
        return spriteInventory
            .filter(inv => inv.slot !== undefined)
            .sort((a, b) => a.slot - b.slot)
            .map(inv => {
            const spriteData = allSprites.find(sprite => sprite.id === inv.spriteId);
            return spriteData ? spriteData.name : "Unknown";
        });
    }

    /**
     * Randomize the member sprite slots
     * @param slotCount
     * @param spriteInventory
     */
    async function randomize(slotCount: number, spriteInventory: SpriteInventoryDto[]) {

        /*for testing*/
        if(slotCount > 10) slotCount = 10;

        /*init variables*/
        const randomSprites: SpriteSlotDto[] = [];
        let slot = 1;

        /*loop until all sprites used or slots full*/
        while(randomSprites.length < slotCount && randomSprites.length < spriteInventory.length){

            /*get a random sprite from the inv*/
            const randomIndex = Math.floor(Math.random() * spriteInventory.length);
            const randomSprite = spriteInventory[randomIndex];

            /*if its not yet used, add it to the random combo*/
            if(!randomSprites.some(random => random.spriteId === randomSprite.spriteId)){
                randomSprites.push({slotId: slot++, spriteId: randomSprite.spriteId});
            }
        }

        /*update the combo and refresh data*/
        await inventoryApi.setMemberSpriteCombo({login: Number(member.userLogin), spriteComboDto: {slots: randomSprites}});
        data = refreshData();
    }

    /*load data initially*/
    let data = refreshData();
</script>

<style>
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: .5em;
    }
</style>

<div>
    {#await data}

        <!-- show pseudo content when loading, this is actually not so good practice -->
        <h3>Current Combo:</h3>
        <b>Slots loading...</b>
        <span>Combo loading...</span>
        <br>
        <input type="button" disabled value="Randomize Slots" />

    {:then [sprites, spriteInventory, slotCount]}

        <!--show some info-->
        <h3>Current Combo:</h3>
        <b>{slotCount.unlockedSlots} Slots unlocked</b>
        <span>{getSpriteComboNames(spriteInventory, sprites).join(", ")}</span>
        <br>

        <!--randomizer button-->
        <input type="button" value="Randomize Slots" on:click={() => randomize(slotCount.unlockedSlots, spriteInventory)} />

    {/await}
</div>