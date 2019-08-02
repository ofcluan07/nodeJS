const express = require('express')
const app = express();

const hostname = "127.0.0.1" ; 
const port = 3000;

app.set("port", port);
app.use((req, res, next) =>{
  res.status(404).send("Página não encontrada");
});

app.listen(port, hostname, () => {
    console.log(`Servidor em execução em http://${hostname}:${port}/`);
  });
