import mongoose1 from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import{test} from "./backend/controllers/alumnos.controllers.js"

dotenv.config();
//agarra la configuracion de la libreria

// dotenv conecta
mongoose1.connect(process.env.urlbd)

// Promesa
.then(() => {
    console.log("si funciona")
})
.catch((error) => {
    console.log("no funciona", error)
});

// Creación de un servidor
const app = express();

app.use(cors()); 
// Seguridad del servidor

app.listen(4001, () => {
    console.log("Escucha bien, no escucho borroso");
});

test()
