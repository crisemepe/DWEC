export {UsuarioCard, NuevoUsuario};
import{UsuarioPublic, dibujarIntereses} from "./model/model.js";

async function listaUser() {
    var user_json;

    await fetch('json/usuarioPublic.json')
    .then(response => response.json())
    .then(data => user_json = data);

    console.log(user_json);
    return user_json; 
}
  



///PAGINA USUARIOS

   
// https://codepen.io/mrsahar/pen/jRjmdL

// https://www.w3schools.com/howto/howto_css_profile_card.asp

async function UsuarioCard(){

    console.log("He entrado en la funcion UsuarioCard");

    let contenido1 = document.querySelector('#contenido');
    let userList = document.createElement('div');
    userList.classList.add('userList');
    let users= new Array();

    let usuarios=await listaUser();
    console.log(usuarios);

    usuarios.intereses

    
    for (let usua of usuarios) {
        console.log("estoy en el For")
        console.log(usua.intereses.split(", "))

        let resultado = usua.intereses.split(", ");
        console.log(resultado[0], resultado[1], resultado[2]);
        users.push(new UsuarioPublic(usua.id_user, usua.nombre, usua.nacim, usua.ciudad, usua.email, usua.profesion, usua.sexo, usua.quiero, resultado[0], resultado[1], resultado[2], usua.foto));
    }

    console.log(users);




    
        let u = document.createElement('div');
        u.classList.add('usuario1');

        let usu="";
         usu=`<div class="usuario2">`;
        
         for (let usr of users){
             let interesF1=dibujarIntereses(usr.interes1);
             let interesF2=dibujarIntereses(usr.interes2);
             let interesF3 = dibujarIntereses(usr.interes3);
             console.log(dibujarIntereses(usr.interes3));
        usu += `
        <div class="users">
            <div class="card" style="width: 18rem; border:none;">
                <img src="${usr.foto}" class="card-img-top" alt="${usr.nombre}">
                    <div>
                        <h5>${usr.nombre}</h5>
                        <p> Fecha de Nacimiento: ${usr.nacim}</p>
                        <p> Sexo: ${usr.sexo}</p>
                        <p> Ciudad: ${usr.ciudad} </p>
                        <p> Que Busca: ${usr.quiero} </p>
                        <p> Intereses: <img class="icono-interes" src="${interesF1}"> 
                                        <img class="icono-interes" src="${interesF2}"> 
                                        <img class="icono-interes" src="${interesF3}"></p>
                        <div class="botones-users">
                        <a href="#" class="btn btn-primary">Like!</a>
                        <a href="#" class="btn btn-danger">Next!</a>
                        </div>
                    </div>
            </div>
        </div>
        `;
         }
         usu +='</div>';
         u.innerHTML += usu;
        
        userList.appendChild(u);
        contenido1.appendChild(userList);
        

    }

function NuevoUsuario(){
    let us = document.createElement('div');
    us.classList.add('nuevo-usuario');
    us.innerHTML = ` 
    <div id="user-contenido">
        <div class="user-content">
            <div class="user-form">
                <form id="user-form1">
                    <h2 class="user-h2">Nuevo usuario</h2>
                    <div class="user-form-input">
                        <label for="nombre" class="user-form-label">Nombre de usuario</label>
                        <input class="user-input" type="text" name="name" id="nombre" value="" required/> 
                    </div>

                    <div class="user-form-input">
                        <label for="nacim" class="user-form-label">Fecha de nacimiento</label>
                        <input class="user-input" type="date" name="date" id="nacim" value="" required />
                    </div>

                    <div class="user-form-input">
                        <label for="ciudad" class="user-form-label">Ciudad</label>
                        <input class="user-input" type="text" name="name" id="ciudad" value="" required />
                        
                    </div>

                    <div class="user-form-input">
                        <label for="email" class="user-form-label">Correo electrónico</label>
                        <input class="user-input" type="email" name="name" id="email" value="" required />
                    </div>

                    <div class="user-form-input">
                        <label for="profesion" class="user-form-label">Profesión</label>
                        <input class="user-input" type="text" name="name" id="profesion" value="" required />
                    </div>
                                       
                    <div class="user-form-input">
                        <label class="user-label-radio"> Destaca 3 Rasgos de tu Personalidad</label>
                        <div class="user-radio-item-list">
                            <span class="user-radio-item">
                                <input class="user-input" type="radio" name="animales" value="1" id="animales" />
                                <label for="animales">Animales</label>
                            </span>
                            <span class="user-radio-item">
                                <input class="user-input" type="radio" name="aire_libre" value="2" id="aire_libre"  />
                                <label for="aire_libre">Aire Libre</label>
                            </span>
                            <span class="user-radio-item">
                                <input class="user-input" type="radio" name="viajes" value="3" id="viajes" />
                                <label for="viajes">Viajes</label>
                            </span>
                            <span class="user-radio-item">
                                <input class="user-input" type="radio" name="musica" value="4" id="musica" />
                                <label for="musica">Musica</label>
                            </span>
                            <span class="user-radio-item">
                                <input class="user-input" type="radio" name="lectura" value="5" id="lectura" />
                                <label for="lectura">Lectura</label>
                            </span>
                            <span class="user-radio-item">
                                <input class="user-input" type="radio" name="cocina" value="6" id="cocina" />
                                <label for="cocina">Cocina</label>
                            </span>
                            <span class="user-radio-item">
                                <input class="user-input" type="radio" name="activo" value="7" id="activo" />
                                <label for="activo">Activo</label>
                            </span>
                            <span class="user-radio-item">
                                <input class="user-input" type="radio" name="fiesta" value="8" id="fiesta"  />
                                <label for="fiesta">Fiesta</label>
                            </span>
                            <span class="user-radio-item">
                                <input class="user-input" type="radio" name="friki" value="9" id="friki" />
                                <label for="friki">Friki</label>
                            </span>
                            <span class="user-radio-item">
                                <input class="user-input" type="radio" name="casero" value="10" id="casero" />
                                <label for="casero">Casero / Familiar</label>
                            </span>
                            <span class="user-radio-item">
                                <input class="user-input" type="radio" name="creativo" value="11" id="creativo" />
                                <label for="creativo">Creativo</label>
                            </span>
                            <span class="radio-item">
                                <input class="user-input" type="radio" name="humor" value="12" id="humor" />
                                <label for="humor">Humor</label>
                            </span>
                            <span class="user-radio-item">
                                <input class="user-input" type="radio" name="juegos" value="13" id="juegos" />
                                <label for="juegos">Juegos</label>
                            </span>
                            <span class="user-radio-item">
                                <input class="user-input" type="radio" name="manitas" value="14" id="manitas"  />
                                <label for="manitas">Manitas</label>
                            </span>
                            <span class="user-radio-item">
                                <input class="user-input" type="radio" name="cuidado" value="15" id="cuidado" />
                                <label for="cuidado">Cuidado / Estética</label>
                            </span>
                            <span class="user-radio-item">
                                <input class="user-input" type="radio" name="social" value="16" id="social" />
                                <label for="social">Social</label>
                            </span>
                            <span class="user-radio-item">
                                <input class="user-input" type="radio" name="vegan" value="17" id="vegan" />
                                <label for="vegan">Vegan</label>
                            </span>
                            <span class="user-radio-item">
                                <input class="user-input" type="radio" name="ninos" value="18" id="ninos" />
                                <label for="ninos">Niños</label>
                            </span>
                        </div>
                    </div>

                    <div class="user-registro">
                        <input type="submit" value="Registrarme" class="user-submit" id="submit" name="submit" />
                        <a class="btn-user">Inicia sesión si ya tienes una cuenta creada. </a>
                    </div>
                </form>
            </div>
        </div>
    </div>
`;
let contenido = document.querySelector('#contenido');
contenido.appendChild(us);
}