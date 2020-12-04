export {Actividad, Usuario};

class Actividad {
    constructor(id, titulo, foto, fecha, sitio, descripcion, plazas, precio, usuarios){
        this.id=id;
        this.titulo=titulo;
        this.foto=foto;
        this.fecha=fecha;
        this.sitio=sitio;
        this.descripcion = descripcion;
        this.plazas=plazas;
        this.precio=precio;
        this.usuarios=usuarios;
    }

}


class Usuario {

    constructor(id, nombre, foto, nacim, ciudad, email, profesion, personalidad, sexo, quiero,  actividades) {
        this.id=id;
        this.nombre = nombre;
        this.foto=foto;
        this.nacim = nacim;
        this.ciudad = ciudad;
        this.email = email;
        this.profesion = profesion;
        this.personalidad = personalidad;
        this.sexo = sexo;
        this.quiero = quiero;
        this.actividades=actividades;
        this.intereses=intereses;
    }
}

/*class Interes {
    constructor(gustos, aficiones, habitos, personalidad, profesion){
        this.gustos=gustos;
        this.aficiones=aficiones;
        this.habitos=habitos;
        this.personalidad=personalidad;
        this.profesion=profesion;
    } }*/

