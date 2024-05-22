
# Gestor de Turnos para Banco

## Descripción
Este proyecto es un sistema de gestión de turnos para un banco, que permite a los clientes registrarse y recibir un turno, mientras que los asesores pueden gestionar la cola de clientes y llamar a los turnos para ser atendidos. La aplicación consta de tres pantallas principales: registro de clientes, gestión de turnos por parte de los asesores, y una pantalla de espera que muestra los turnos llamados y el módulo de atención.

## Estructura del Proyecto

gestor_t_banco/
├── client/
│ ├── public/
│ ├── src/
│ │ ├── assets/
│ │ ├── components/
│ │ │ ├── NavBar.vue
│ │ ├── router/
│ │ │ └── index.js
│ │ ├── views/
│ │ │ ├── GestionTurnos.vue
│ │ │ ├── HomePage.vue
│ │ │ ├── Registro.vue
│ │ │ └── SalaEspera.vue
│ │ ├── App.vue
│ │ └── main.js
│ ├── package.json
│ └── vue.config.js
├── server/
│ ├── src/
│ │ ├── config/
│ │ │ └── database.js
│ │ ├── controllers/
│ │ │ └── turnosController.js
│ │ ├── models/
│ │ │ └── turno.js
│ │ ├── routes/
│ │ │ └── turnos.js
│ │ ├── app.js
│ │ └── server.js
│ ├── package.json
│ └── .env
├── README.md
└── .gitignore


## Tecnologías Utilizadas

- **Frontend:**
  - Vue.js
  - Vue Router
  - Axios

- **Backend:**
  - Node.js
  - Express
  - PostgreSQL

## Instalación

### Requisitos Previos
- Node.js (v14 o superior)
- PostgreSQL

### Clonar el Repositorio
```bash
git clone https://github.com/Jevega14/gestor_t_banco.git
cd gestor_t_banco

Configurar el Backend
Navegar al directorio del servidor:

bash
Copy code
cd server
Instalar dependencias:

bash
Copy code
npm install
Configurar la base de datos:

Crear una base de datos en PostgreSQL.
Configurar las variables de entorno en el archivo .env basado en el archivo .env.example.
Ejecutar migraciones y semillas (si aplica):

bash
Copy code
npm run migrate
npm run seed
Iniciar el servidor:

bash
Copy code
npm start
Configurar el Frontend
Navegar al directorio del cliente:

bash
Copy code
cd client
Instalar dependencias:

bash
Copy code
npm install
Iniciar la aplicación Vue:

bash
Copy code
npm run serve
Uso
Pantalla de Registro:


## Licencia
Este proyecto está licenciado bajo la Licencia MIT. Ver el archivo LICENSE para más detalles.

# Contacto
Jessica Vega - jevega1402qgmail.com

Repositorio del Proyecto: https://github.com/Jevega14/gestor_t_banco
