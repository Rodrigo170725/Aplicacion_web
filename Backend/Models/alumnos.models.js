import { Schema, model } from "mongoose";

const EsquemaAlumno = new Schema({
    Nombre: String,
    Calificacion: Number,
    Materia: String
})//Esqueleto o modelo de la tabla

export const TablaAlumnos = new model("Tabla de alumnos reprobados", EsquemaAlumno);//Creacion de la tabla