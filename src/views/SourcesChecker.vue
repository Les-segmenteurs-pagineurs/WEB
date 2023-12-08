<template>
    <div class="wrapper_view">
        <h1>Vos sources sont-elles fiables ?</h1>
        <div class="sources_checker">
            <img class="search_icon" src="../assets/searchIcon.png" alt="searchIcon">
            <input type="text" placeholder="Entrez votre lien..." class="transparent-input">
        </div>
    </div>
</template>

<script>
export default {
    name: 'LinkChecker',
    data() {
        return {
            link: ''
        }
    }
}
</script>

<style>
.wrapper_view {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background-image: url('../assets/backgroundHome.png');
}

.sources_checker {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 58px;
    padding: 1rem;
    border: 5px solid #FFF;
}

h1 {
    color: #FFF;
    font-family: Inter;
    font-size: 4rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

.transparent-input {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: transparent;
    border: 1px solid #ccc;
    font-size: x-large;
    font-weight: 700;
    justify-content: center;
    align-items: center;
    width: 50vw;
    border: 0;
}

.search_icon {
    width: 5%;
    margin-right: 0.5rem;
}

.transparent-input::placeholder {
    color: white;
}

.transparent-input:focus {
    outline: none;
}
</style>