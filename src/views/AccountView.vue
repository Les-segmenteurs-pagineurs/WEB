<template>
  <div id="user_and_history">
    <div id="user_name">
      <h1>Profil de l'utilisateur connecté</h1>
      <div v-if="user">
        <p class="user-info">Nom d'utilisateur : {{ user.username }}</p>
        <!-- Autres détails de l'utilisateur selon votre modèle -->
        <div id="change_password"></div>
      </div>
    
      <div v-else>
        <p>Aucun utilisateur connecté.</p>
      </div>
      <router-link to="/user/add_account">Addaccount</router-link>
      <br>
      <router-link to="/user/del_account">Delaccount</router-link>
    </div>

    <div id="history_quizz">
      <div v-if="listeScores.length > 0">
        <h2>Historique des scores</h2>
        <div v-for="score in listeScores" :key="score.date" class="score-item">
          <p class="score-date">Date : {{ score.date }}  et Score : {{ score.score }}</p>
        </div>
      </div>
      <div v-else>
        <p>Aucun historique de scores disponible.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const user = ref(null);

    const listeScores = [
      { date: "2023-01-01", score: 80 },
      { date: "2023-02-15", score: 92 },
      { date: "2023-03-10", score: 75 },
      { date: "2023-04-05", score: 88 },
      { date: "2023-05-20", score: 95 },
      { date: "2023-06-15", score: 70 },
      { date: "2023-07-02", score: 82 },
      { date: "2023-08-18", score: 89 },
      { date: "2023-09-09", score: 78 },
      { date: "2023-10-22", score: 91 }
    ];

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
      listeScores
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
  background: #aaa; /* Bleu */
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
