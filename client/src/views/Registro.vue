<template>
  <div class="registro">
    <h1>Registro de Turnos</h1>
    <form @submit.prevent="registrarTurno">
      <input v-model="cc" placeholder="Cédula" />
      <select v-model="tipoTurno">
        <option value="N">Normal</option>
        <option value="P">Prioritario</option>
        <option value="BG">Buena Gente</option>
      </select>
      <button type="submit">Registrar</button>
    </form>
    <p v-if="codigoTurno">Turno registrado: {{ codigoTurno }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'RegistroTurnos', // Renombrar el componente a un nombre de multi-palabra
  data() {
    return {
      cc: '',
      tipoTurno: 'N',
      codigoTurno: ''
    };
  },
  methods: {
    async registrarTurno() {
      try {
        const response = await axios.post('/api/turnos', { // Asegúrate de que la URL sea correcta
          cc: this.cc,
          tipoTurno: this.tipoTurno
        });
        console.log('Turno registrado:', response.data);
        this.codigoTurno = response.data.codigo;
      } catch (error) {
        console.error('Error registrando turno:', error);
      }
    }
  }
};
</script>

<style scoped>
.registro {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
}

input, select {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 10px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

p {
  margin-top: 10px;
  text-align: center;
  font-weight: bold;
}
</style>
