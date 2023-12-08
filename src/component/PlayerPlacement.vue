<template>
    <div class="player">
        <div class="rank">
            {{infos_player.rank}}
        </div>
        <div class="name">
            {{infos_player.name}}
        </div>
        <div class="score">
            {{infos_player.score}}
        </div>
    </div>
        
    <RouterView />
</template>


<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
    "name": "PlayerPlacement",
    "props": {
        infos_player : Object,
    }
}

</script>

<style scoped>
/*Reset CSS*/
* {
    height: 100%;
    width: 20%;
    margin: 0px;
    padding: 0px;
    font-family: Avenir, sans-serif;
}


.player{
    
    border-radius:5px;
    border: 1px solid RED;
    Width: 100%;
    height: 5vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-direction: row;
    
 
}

.player div {
    display: flex;
    align-items: center;
   
}


</style>
