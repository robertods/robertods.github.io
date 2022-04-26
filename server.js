const express = require("express");
const webPush = require("web-push");
const path = require("path");
const dotEnv = require("dotenv");

// Init app
const app = express();
dotEnv.config({
  path: "globals.env",
});

// Set middlewares and request handelrs
app.use(express.static(path.join(__dirname, "static")));
app.use(express.json()); // Parsear los cuerpos como json

// Set extra options
webPush.setVapidDetails( // Setear los datos generales de webPush
  "mailto:seb@gmail.com",
  process.env.PUBLIC_VAPID_KEY,
  process.env.PRIVATE_VAPID_KEY
);

// Routes
app.post("/subscribir", function (req, res) {
  webPush.sendNotification( // Enviar una notificación mediante push
    req.body,
    JSON.stringify({
      title: "Hola mundo",
      options: {
          body: 'Hola mundo'
      }
    })
  );
});

// Listen
// Ejecutar el servidor
app.listen(3500, () =>
  console.log("Servidor ejecutandose en http://localhost:3500")
);
