import mongoose from "mongoose"; //libreria para conectar con mongo DB//
import dotenv from "dotenv"; //libreria para llamar el archivo .env//
import express from "express"; //libreria para crear servidores//
import cors from "cors"; //libreria para dar seguridad en el server//
import { test } from "./Backend/Controllers/alumnos.controllers.js"; //importacion del controlador de alumnos//

dotenv.config(); //configuracion para usar el archivo .env//
mongoose.connect(process.env.url_bd) //conexion a la base de datos//
.then(() => console.log("Funciono la base de datos")
)
.catch((error) => console.log("No jalo esta madre"));

const app = express(); //creacion del servido local//
app.use(cors());

app.listen(4000, () => console.log("Funciona el servidor"))

test();






