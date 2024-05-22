const Turno = require('../models/Turno');
const { v4: uuidv4 } = require('uuid');

const generarCodigoTurno = (tipo) => {
  const numero = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  return `${tipo}${numero}`;
};

const obtenerTurnos = async (req, res) => {
  try {
    const turnos = await Turno.find();
    res.json(turnos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const crearTurno = async (req, res) => {
  const { cc, tipo } = req.body;
  const codigo = generarCodigoTurno(tipo);
  const turno = new Turno({ cc, tipo, codigo });

  try {
    const nuevoTurno = await turno.save();
    res.status(201).json(nuevoTurno);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const llamarTurno = async (req, res) => {
  const { id } = req.params;
  const { modulo } = req.body;

  try {
    const turno = await Turno.findById(id);
    if (!turno) return res.status(404).json({ message: 'Turno no encontrado' });

    turno.estado = 'llamado';
    turno.modulo = modulo;
    await turno.save();

    res.json(turno);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  obtenerTurnos,
  crearTurno,
  llamarTurno
};
