<template>
    <header>
        <nav>
            <img src="../src/assets/recyclingIcon.png" alt="recycling Icon">
            <ul>
                <li><a href="#">ACCUEIL</a></li>
                <li><a href="#">APPRENDRE</a></li>
                <li><a href="#">QUIZZ</a></li>
            </ul>
        </nav>
        <div class="container">
            <PlayerPlacement/>
        </div>
        
    </header>

    <RouterView />
</template>


<script setup>
import { RouterLink, RouterView } from 'vue-router'
import PlayerPlacement from '@/component/PlayerPlacement.vue'

</script>

<style scoped>
/*Reset CSS*/
* {
    height: 100%;
    width: 100%;
    margin: 0px;
    padding: 0px;
    font-family: Avenir, sans-serif;
}

img {
    margin-left: 1rem;
    width: 3%;
    height: 3%;
}

nav {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 auto;
    top: 0px;
}

nav ul {
    display: flex;
    justify-content: space-around;
    list-style-type: none;
}

nav ul li {
    float: left;
    width: 25%;
    text-align: center;
    position: relative;
}

nav ul::after {
    content: "";
    display: table;
    clear: both;
}

nav a {
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-decoration: none;
    color: white;
    font-weight: 900;
    font-size: 2rem;
    border-bottom: 2px solid transparent;
    padding: 10px 0px;
}

.conteneur {
    margin: 50px 20px;
    height: 1500px;
}
</style>
