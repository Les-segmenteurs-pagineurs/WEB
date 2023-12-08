<template>
    <div id="Login">
      <h1>Ajouter un Utilisateur</h1>
      <form @submit.prevent="Login">
        <label>Login:</label>
        <input type="text" v-model="login" />
  
        <label>Mot de passe:</label>
        <input type="password" v-model="password" />
  
        <input type="submit" value="login" />
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import axios from 'axios';
  
  export default {
    setup() {
      const login = ref('');
      const password = ref('');
      const password2 = ref('');
  
      const Login = async () => {
          // Faites un appel à l'API pour enregistrer l'utilisateur
          const response = await axios.post('http://klebert-host.com:60513/user/login', {
            "login": login.value,
            "password": password.value,
          });
          console.log('Utilisateur connecté :', response.status);
        if(response.status == 200)
        {
            window.location.href = '/account';
        }
      };
  
      return {
        login,
        password,
        Login,
      };
    },
  };
  </script>
  <style scoped>
  #add_account {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    font-size: 24px;
    text-align: center;
    color: #333;
  }
  
  form {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }
  
  label {
    margin-bottom: 8px;
    color: #555;
  }
  
  input {
    padding: 8px;
    margin-bottom: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  input[type="submit"] {
    background-color: #4caf50;
    color: white;
    cursor: pointer;
  }
  
  input[type="submit"]:hover {
    background-color: #45a049;
  }
  
  </style>
  