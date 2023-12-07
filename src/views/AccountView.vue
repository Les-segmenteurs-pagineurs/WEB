<template>
  <div id="user_and_history">
    <div id="user_name"> 
      <h1>Profil de l'utilisateur connecté</h1>
      <div v-if="user">
        <p>Nom d'utilisateur : {{ user.username }}</p>
        <!-- Autres détails de l'utilisateur selon votre modèle -->
        <div id="change_password">
          
        </div>
      </div>
      <div v-else>
        <p>Aucun utilisateur connecté.</p>
      </div>
    </div>

    <div id="history_quizz"> <!-- Correction du nom de l'ID ici -->
      <p>hey</p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const user = ref(null);

    onMounted(async () => {
      try {
        // Faites un appel à l'API pour récupérer les détails de l'utilisateur connecté
        const response = await axios.get('http://klebert-host.com:60513//get_login'); // Remplacez par l'URL correcte
        user.value = response.data;
      } catch (error) {
        console.error('Erreur lors de la récupération de l\'utilisateur connecté', error);
      }
    });

    return {
      user,
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
    background: #EDF5E1;
    padding: 10px;
  }

  #history_quizz {
    align-items: flex-start;
    background: beige;
    padding: 20px;
  }
</style>