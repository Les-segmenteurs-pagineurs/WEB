<template>
    <div class="about">
      <h1>LeaderBoard</h1>
      <PlayerPlacement v-for="player in leaderboard" :infoplayer = "player" :key="player.id"/>

    </div> 
  </template>
  
  <script>  
  import PlayerPlacement from '@/component/PlayerPlacement.vue';
  export default {
    name: "LeaderBoardView",
    components: {
      PlayerPlacement
    },
    setup(){
      var leaderboard = ref([])
      
      onMounted(async () => {
        try {
        // Faites un appel à l'API pour récupérer les détails de l'utilisateur connecté
        const response = await axios.get('http://klebert-host.com:60513/leaderboard'); // Remplacez par l'URL correcte
        leaderboard.value = response.data;
      } catch (error) {
        console.error('Erreur lors de la récupération de l\'utilisateur connecté', error);
      }
      
      }
      )
      
      return{
        leaderboard,
      }
    }
    
    
  };
  </script>
  
  <style>
  
  
  </style>