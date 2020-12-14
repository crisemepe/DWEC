export {Actividad, UsuarioPublic, dibujarIntereses};

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

    constructor(id, nombre, nacim, ciudad, email, profesion,  sexo, quiero, interes1, interes2, interes3) {
        this.id=id;
        this.nombre = nombre;
        this.nacim = nacim;
        this.ciudad = ciudad;
        this.email = email;
        this.profesion = profesion;
        this.sexo = sexo;
        this.quiero = quiero;
        this.interes1=interes1;
        this.interes2=interes2;
        this.interes3=interes3;
    }

 

}

class UsuarioPublic extends Usuario{
    constructor(id, nombre, nacim, ciudad, email, profesion,  sexo, quiero, interes1, interes2, interes3, foto) {
        super(id, nombre, nacim, ciudad, email, profesion, sexo, quiero, interes1, interes2, interes3);
        this.foto = foto;
    }


}

class Interes {
    constructor(nombre, foto){
        this.nombre=nombre;
        this.foto=foto;
    } 

}


//METODOS Y FUNCIONES GLOBALES



function rellenarIntereses(){

    let interesesNom = [
    "animales", "aire_libre", 
    "viajes", "musica", 
    "lectura", "cocina", 
    "activo", "fiesta", 
    "friki", "casero", 
    "creativo", "humor", 
    "juegos", "manitas", 
    "cuidado", "social", 
    "vegan", "ninos"];


    
     let arrayIntereses=[];

    for(let i=0; i<=interesesNom.length;i++){
        console.log("Lerolerolero");
        let interes = new Interes(interesesNom[i],"./Graficos/"+(i+1)+".png");
        arrayIntereses.push(interes);
        console.log("array intereses" + arrayIntereses);
    }
    
    return arrayIntereses;
}

function dibujarIntereses(interesUsuario){
    console.log("dibujaInteres");
    let intereses=rellenarIntereses();
    console.log(intereses + "RellenarIntereses");
    for(let i of intereses){
        if(interesUsuario == i.nombre){
            console.log("Return de dibujaInteres" + i.foto);
            return i.foto;
        } else {
            console.log("error en dibujarInteres");
        }
    }
}

