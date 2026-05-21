import { TablaAlumnos } from "../Models/alumnos.models.js";

TablaAlumnos.create({
    Nombre: "Panfilo",
    Calificacion: 5,
    Materia: "Matematicas"
})

export const test = (() => console.log("Si se esta llamando al controlador "))

