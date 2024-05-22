const express = require('express');
const Turno = require('../models/Turno');

const router = express.Router();

// Crear un nuevo turno
router.post('/turnos', async (req, res) => {
  try {
    const { cc, tipo, codigo } = req.body;
    const nuevoTurno = await Turno.create({ cc, tipo, codigo });
    res.json(nuevoTurno);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener todos los turnos
router.get('/turnos', async (req, res) => {
  try {
    const turnos = await Turno.findAll();
    res.json(turnos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
