<template>
    <nav>
      <router-link to="/">Inicio</router-link>
      <router-link to="/registro">Registro</router-link>
      <router-link to="/sala-espera">Sala de Espera</router-link>
      <router-link to="/gestion-turnos">Gestión de Turnos</router-link>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavBar'
  };
  </script>
  
  <style scoped>
  nav {
    display: flex;
    justify-content: space-around;
    background-color: #333;
    padding: 1em;
  }
  a {
    color: white;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  </style>
  