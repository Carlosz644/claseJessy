import { ModeloAlumnos } from "../models/alumnos.model.js";

ModeloAlumnos.create({
    name:"Brandom",
    apepat: "Alonso",
    apemat:"Lopez",
    calificación: 4.5 
},
{
    name:"Lu",
    apepat: "Valadez",
    apemat:"Gutierrz",
    calificación: 5 

})

export const test = () => {
    console.log("Si se está llamando al controlador desde app")
};
