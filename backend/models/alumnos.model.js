import { Schema, model } from "mongoose"

const EsquemaAlumnos = new Schema({
    name:String,
    apepat:String,
    apemat:String,
    calificación:Number

//Schema organiza es el esqueleto 
})

export const ModeloAlumnos = new model("Tabla de alumnos Extraodinario ", EsquemaAlumnos)
