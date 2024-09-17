<script lang="ts">
    import {
        InventoryApi,
        type MemberDto,
        type SpriteDto, type SpriteInventoryDto,
        SpritesApi,
        type SpriteSlotDto
    } from "../api";
    import {ApiFactory} from "../util/apiFactory";

    export let member: MemberDto;

    const spriteApi = ApiFactory.createApi(SpritesApi);
    const inventoryApi = ApiFactory.createApi(InventoryApi);

    function refreshData() {
        return Promise.all([
            spriteApi.getAllSprites(),
            inventoryApi.getMemberSpriteInventory({login: Number(member.userLogin)}),
            inventoryApi.getMemberSpriteSlotCount({login: Number(member.userLogin)})
        ]);
    }

    function getSpriteComboNames(spriteInventory: SpriteInventoryDto[], allSprites: SpriteDto[]) {
        return spriteInventory
            .filter(inv => inv.slot !== undefined)
            .sort((a, b) => a.slot - b.slot)
            .map(inv => {
            const spriteData = allSprites.find(sprite => sprite.id === inv.spriteId);
            return spriteData ? spriteData.name : "Unknown";
        });
    }

    async function randomize(slotCount: number, spriteInventory: SpriteInventoryDto[]) {

        if(slotCount > 10) slotCount = 10;

        const randomSprites: SpriteSlotDto[] = [];
        let slot = 1;

        while(randomSprites.length < slotCount && randomSprites.length < spriteInventory.length){
            const randomIndex = Math.floor(Math.random() * spriteInventory.length);
            const randomSprite = spriteInventory[randomIndex];
            if(!randomSprites.some(random => random.spriteId === randomSprite.spriteId)){
                randomSprites.push({slotId: slot++, spriteId: randomSprite.spriteId});
            }
        }

        await inventoryApi.setMemberSpriteCombo({login: Number(member.userLogin), spriteComboDto: {slots: randomSprites}});
        data = refreshData();
    }

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