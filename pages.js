import { dibujaLogin, dibujaHome, dibujaMenu, dibujaLogOut } from './views/views.js';
import {UsuarioCard, NuevoUsuario} from "./ListaUsuarios.js";
import {ActividadCard} from "./ListaActividades.js";
export { Page };



class Page {

   static mostrarPagina(nombrePagina) {

    Page.paginaVacia();
    console.log("He creado la nueva pagina");

        if (nombrePagina == "Inicio") {
            console.log("He entrado en Inicio");
            Page.paginaHome();
        } else if (nombrePagina == "Usuarios") {
            console.log("He entrado en Usuarios");
            dibujaMenu();
            Page.paginaUsuarios();
        } else if (nombrePagina == "Eventos") {
            console.log("He entrado en eventos");
            dibujaMenu();
           // dibujarBuscar();
            Page.paginaEventos();
        } else if (nombrePagina == "Perfil") {
            console.log("He entrado en Perfil");
            dibujaMenu();
            dibujaPerfil();
        } else if (nombrePagina == "Login") {
            console.log("He entrado en Login");
            Page.paginaLogin();
        } else {
            console.log(nombrePagina);
        }

    }


    //PAGINA VACIA
    static paginaVacia() {
        let paginavacia = " ";
        let pag = document.querySelector('#contenido');
        pag.innerHTML = paginavacia;
        let pag1 = document.querySelector('#superior');
        pag1.innerHTML = paginavacia;
        let pag2 = document.querySelector('#footer');
        pag2.innerHTML= paginavacia;
    }

    //LOGIN

    static paginaLogin() {
        dibujaLogin();

        $('#login-button').click(function () {
            $('#login-button').fadeOut("slow", function () {
                $("#container").fadeIn();
                TweenMax.from("#container", .4, { scale: 0, ease: Sine.easeInOut });
                TweenMax.to("#container", .4, { scale: 1, ease: Sine.easeInOut });
            });
        });

        $(".close-btn").click(function () {
            TweenMax.from("#container", .4, { scale: 1, ease: Sine.easeInOut });
            TweenMax.to("#container", .4, { left: "0px", scale: 0, ease: Sine.easeInOut });
            $("#container, #forgotten-container").fadeOut(800, function () {
                $("#login-button").fadeIn(800);
            });
        });

        /* Forgotten Password */
        $('#forgotten').click(function () {
            $("#container").fadeOut(function () {
                $("#forgotten-container").fadeIn();
            });
        });


        setTimeout(() => {
            let botoncillo = document.querySelector(".boton-inicio");
            var form = document.getElementsByTagName('form')[0];
            botoncillo.addEventListener("click", () => {
                if (form.usuario.value == 'cris' && form.pass.value == '123') {
                    localStorage.setItem("usuario", form.usuario.value);
                    localStorage.setItem("password", form.pass.value);
                    document.cookie="name = cris";
                    this.mostrarPagina("Inicio");
                } else {
                    alert("Ingrese nombre de usuario y contraseña válidos. ");
                }
            });
        }, 50);

        setTimeout(() => {
            let botonReg = document.querySelector(".boton-regis");
            botonReg.addEventListener("click", () => {
                    Page.paginaVacia();
                    dibujaMenu();
                    NuevoUsuario();
            });
        }, 50);
    }



    // HOME
    static paginaHome() {
        dibujaLogOut();
        dibujaHome();
        

    }
      
    ///PAGINA EVENTOS
     static paginaEventos() {

        console.log("Dibujando Eventos..."); 
        ActividadCard();

    }


      

    ///PAGINA USUARIOS
    static paginaUsuarios() {
        console.log("Dibujando Usuarios...");
        UsuarioCard();

        let e =`<div class="btnuser"><button class="btn-nuser">Crear nuevo usuario!</button></div>`;
        let footer = document.querySelector('#footer');
        footer.innerHTML = e;

        setTimeout(() => {
            let botonE = document.querySelector(".btn-nuser");
            botonE.addEventListener("click", () => {
                    Page.paginavacia();
                    NuevoEvento();  
            });
        }, 50);
    }




    //FOOTER
   
}
