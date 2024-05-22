<template>
  <div>
    <h1>Sala de Espera</h1>
    <ul>
      <li v-for="turno in ultimosTurnos" :key="turno._id">
        Turno: {{ turno.codigo }} - Módulo: {{ turno.modulo }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SalaEspera',
  data() {
    return {
      ultimosTurnos: []
    };
  },
  async created() {
    await this.obtenerUltimosTurnos();
  },
  methods: {
    async obtenerUltimosTurnos() {
      try {
        const response = await axios.get('http://localhost:3000/api/turnos');
        this.ultimosTurnos = response.data.slice(-5);
      } catch (error) {
        console.error('Error obteniendo turnos:', error);
      }
    }
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  background: #f4f4f4;
  margin: 5px 0;
  padding: 10px;
  border: 1px solid #ddd;
}
</style>
