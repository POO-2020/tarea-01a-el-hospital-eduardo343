import Doctor from "./doctor.js"
import Cita from "./Cita.js"

class Hospital {
    constructor(nombre, direccion, doctores, citas){
        this.nombre = nombre;
        this.direccion = direccion;
        this.doctores = doctores; 
        this.citas; 
    }
}