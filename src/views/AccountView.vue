<template>
    <div class="about">
      <h1>Mon Compte</h1>
      <form @submit.prevent="add_categorie">
        <input type="text" v-model="login" @change="console.log(login)">
        <input type="password" v-model="password" @change="console.log(password)">
        <input type="submit" value="Ajouter">
      </form>
    </div>
  <div class="result_quizz">
    <h1>Résultats Quizz</h1>
    <!-- <div class="cats">
        <Categorie v-for="categorie in categories" :key="categorie.id" :infos_categorie="categorie"/>
    </div> -->
  </div>
  </template>
  
  <script>  
  export default {
    name: 'AccountView',
    
  };
  </script>
  
  <style>
  /* @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  } */
  </style>
  