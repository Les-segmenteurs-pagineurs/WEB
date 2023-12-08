<template>
    <div id="del_account">
        <h1>Supprimer un User</h1>
        <form @submit.prevent="del_user">
        <input type="submit" value="Ajouter" >
        </form>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  export default {
    setup() {
      const user = ref(null);
      del_user(async () => {
        try {
          // Faites un appel à l'API pour récupérer les détails de l'utilisateur connecté
          const response = await axios.post('http://klebert-host.com:60513//get_login'); // Remplacez par l'URL correcte
          user.value = response.data;
        } catch (error) {
          console.error('Erreur lors de la récupération de l\'utilisateur connecté', error);
        }
      });
  
      return {
        user,
        del_user
      };
    },
  };
  </script>
  
  <style>
  #user_and_history {
    display: flex;
    flex-direction: row;
    gap: 20px; /* Espace entre les deux sections */
  }
  
  #user_name {
    align-items: center;
    background: #bz; /* Bleu */
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .user-info {
    font-size: 1.2em;
    font-weight: bold;
    color: #EDF5E1;
  }
  
  #history_quizz {
    align-items: flex-start;
    background: #EDF5E1; /* Gris clair */
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .score-item {
    border: 1px solid #ccc;
    border-radius: 8px;
    margin-bottom: 10px;
    padding: 15px;
  }
  
  .score-date {
    font-weight: bold;
    color: #2c3e50; /* Gris foncé */
  }
  
  .score-value {
    color: #e74c3c; /* Rouge */
    font-size: 1.1em;
    margin-top: 5px;
  }
  </style>
  