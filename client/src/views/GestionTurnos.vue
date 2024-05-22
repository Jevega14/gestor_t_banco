<template>
  <div>
    <h1>Gestión de Turnos</h1>
    <ul>
      <li v-for="turno in turnos" :key="turno._id">
        {{ turno.codigo }}
        <button @click="llamarTurno(turno._id, 'Módulo 1')">Llamar</button>
        <button @click="siguienteTurno(turno._id)">Siguiente Turno</button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'GestionTurnos',
  data() {
    return {
      turnos: []
    };
  },
  async created() {
    await this.obtenerTurnos();
  },
  methods: {
    async obtenerTurnos() {
      try {
        const response = await axios.get('http://localhost:3000/api/turnos');
        this.turnos = response.data;
      } catch (error) {
        console.error('Error obteniendo turnos:', error);
      }
    },
    async llamarTurno(id, modulo) {
      try {
        await axios.post(`http://localhost:3000/api/turnos/${id}/llamar`, { modulo });
        await this.obtenerTurnos();
      } catch (error) {
        console.error('Error llamando turno:', error);
      }
    },
    async siguienteTurno(id) {
      try {
        await axios.post(`http://localhost:3000/api/turnos/${id}/siguiente`);
        await this.obtenerTurnos();
      } catch (error) {
        console.error('Error llamando siguiente turno:', error);
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
button {
  margin-left: 10px;
}
</style>
