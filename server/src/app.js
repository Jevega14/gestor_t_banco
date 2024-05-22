const express = require('express');
const sequelize = require('./config/database');
const turnosRouter = require('./routes/turnos');

const app = express();
app.use(express.json());

// Rutas
app.use('/api', turnosRouter);

// Sincronizar la base de datos y luego iniciar el servidor
sequelize.sync()
  .then(() => {
    console.log('Database synced');
    app.listen(5000, () => {
      console.log('Server running on port 5000');
    });
  })
  .catch(err => {
    console.error('Unable to sync the database:', err);
  });
