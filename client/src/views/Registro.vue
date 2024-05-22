<template>
  <div>
    <h1>Registro</h1>
    <form @submit.prevent="registrarTurno">
      <label for="cc">Cédula:</label>
      <input type="text" id="cc" v-model="cc" />
      <label for="tipoTurno">Tipo de Turno:</label>
      <select id="tipoTurno" v-model="tipoTurno">
        <option value="N">Normal</option>
        <option value="P">Prioritario</option>
        <option value="BG">Buena Gente</option>
      </select>
      <button type="submit">Registrar</button>
    </form>
    <div v-if="codigoTurno">
      <h2>Su código de turno es: {{ codigoTurno }}</h2>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'RegistroCliente',
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
        const response = await axios.post('http://localhost:3000/api/turnos', {
          cc: this.cc,
          tipo: this.tipoTurno
        });
        this.codigoTurno = response.data.codigo;
      } catch (error) {
        console.error('Error registrando turno:', error);
      }
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: auto;
}
label, input, select, button {
  margin-bottom: 10px;
}
</style>
