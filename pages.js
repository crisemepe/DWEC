import { dibujaLogin, dibujaHome, dibujaMenu } from './views/views.js';
import {UsuarioCard} from "./ListaUsuarios.js";
import {ActividadCard} from "./ListaActividades.js";
export { Page };


class Page {

   static mostrarPagina(nombrePagina) {

    Page.paginaVacia();
        if (nombrePagina == "Inicio") {
            Page.paginaHome();
        } else if (nombrePagina == "Usuarios") {
            dibujaMenu();
            Page.paginaUsuarios();
        } else if (nombrePagina == "Eventos") {
            dibujaMenu();
            Page.paginaEventos();
        } else if (nombrePagina == "Perfil") {
            dibujaMenu();
            dibujaPerfil();
        } else if (nombrePagina == "Login") {
            Page.paginaLogin();
        }
    }


    //PAGINA VACIA
    static paginaVacia() {
        let paginavacia = " ";
        let pag = document.querySelector('#contenido');
        pag.innerHTML = paginavacia;
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
                    this.mostrarPagina("Inicio");
                } else {
                    alert("Ingrese nombre de usuario y contraseña válidos. ");
                }
            });
        }, 50);
    }



    // HOME
    static paginaHome() {
        dibujaHome();

    }
      
    ///PAGINA EVENTOS
     static paginaEventos() {
        this.ActividadCard();

    }


      

    ///PAGINA USUARIOS
    static paginaUsuarios() {
        this.UsuarioCard();

    }




    //FOOTER
   
}
