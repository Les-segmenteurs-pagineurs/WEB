<template>
    <header>
        <nav>
            <RouterLink to="/"><img class="logo" src="../src/assets/recyclingIcon.png" alt="recycling Icon"></RouterLink>
            <RouterLink to="/">APPRENDRE</RouterLink>
            <RouterLink to="">QUIZ</RouterLink>
            <RouterLink to="/sourceschecker">SOURCESCHECKER</RouterLink>
            <RouterLink to="/user/account" style="display: inline-block; width: auto;"><img class="account"
                    src="../src/assets/accountIcon.png"></RouterLink>
        </nav>
    </header>

    <RouterView />
</template>


<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
/*Reset CSS*/
html {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: Avenir, sans-serif;
}

header {
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 100vw;
}

body {
    margin: 0;
}

.logo {
    margin-left: 1rem;
    width: 55%;
    height: 55%;
}

.account {
    margin-left: 0;
    padding: 0.5rem 0 0 0.5rem;
    width: 50%;
    height: 13%;
    border: 0;
}

nav {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    top: 0px;
}

nav a {
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-decoration: none;
    color: white;
    font-weight: 900;
    font-size: 2rem;
}
</style>
