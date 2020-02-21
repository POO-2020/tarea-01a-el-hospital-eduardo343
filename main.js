import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"
import Nombre from "./nombre.js";
import Paciente from "./paciente.js"
import Doctor from "./doctor.js"
import Cita from "./cita.js"

class Main {
    pruebaFecha () {
        let fecha = new Fecha(15,2,2021);
        console.log(fecha.getAños());
        console.log(fecha.getMeses());
        console.log(fecha.getSemanas());
        console.log(fecha.getDias());
        console.log(fecha.getFecha());
        console.log(fecha.getDiaFecha());
    }

    pruebaTiempo(){
        let hora = new Tiempo(6, 24, "pm");
        console.log(hora.getFormato12());
        console.log(hora.getFormato24());
    }

    pruebaNombre(){
        let nombre = new Nombre("bastian", "natael", "corona");
        console.log(nombre.getNombreCompleto());
        console.log(nombre.getApellidoNombre());
        console.log(nombre.getIniciales());
    }

    pruebaPaciente(){
        let paciente = new Paciente(new Nombre("bastian", "natael", "corona"), new Fecha(31,3,2001), 3121154897);
        console.log(paciente.getPerfil());
    }

    pruebaDoctor(){
        let doctor = new Doctor("ETF59", "proctologo", new Nombre("luis","solis ", "gonzales"), 3121456978);
        console.log(doctor.getPerfil());
    }

    pruebaCita(){
        let cita = new Cita(new Fecha(20,2,2020), new Tiempo(6,30,"pm"), new Doctor("ETF59", "Cardiólogo", new Nombre("luis", "solis", "gonzales"), 3135620), new Paciente(new Nombre("bastian", "natael", "corona"), new Fecha(31,3,2001),  3121154897));
    console.log(cita.getCita());
    }
} 

    let app = new Main();

    app.pruebaFecha();
    app.pruebaTiempo();
    app.pruebaNombre();
    app.pruebaPaciente();
    app.pruebaDoctor();
    app.pruebaCita();