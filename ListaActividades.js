export { ActividadCard };
import { Actividad } from "./model/model.js";


let actividades;
let actividades2 = [];


async function listaAct() {
    let act_json;

    await fetch('./json/actividades.json')
        .then(response => response.json())
        .then(data => act_json = data);

    console.log(act_json);

    return act_json;

}
//COGER del Json Actividades cada act

///PAGINA ACTIVIDADES

async function ActividadCard() {


    console.log("He entrado en la funcion ActividadCard");

    let contenido = document.querySelector('#contenido');
    let actList = document.createElement('div');
    actList.classList.add('actList');



    actividades = await listaAct();
    console.log(actividades);



    for (let acti of actividades) {
        console.log("estoy en el For:");
        actividades2.push(new Actividad(acti.id_act, acti.titulo, acti.foto, acti.fecha, acti.sitio, acti.descripcion, acti.plazas, acti.precio
        ));
    }

    console.log("Imprime actividades2" + actividades2);



    let a = document.createElement('div');
    a.classList.add('actividad');

    let acti = "";
    acti = `<div class="act-content">`;


    for (let act of actividades2) {

        acti += `
            <div class="act-card">
            <div class="act-contenido">
            <h2 class="act-title"> ${act.titulo} </h2>
            <p class="act-copy">Fecha: ${act.fecha}</p>
            <p class="act-copy">Sitio: ${act.sitio}</p>
            <p class="act-copy">Plazas: ${act.plazas}</p>
            <button class="act-btn">Apuntame!</button>
            </div>
            </div>            
            `;
    }


    acti += `</div>`;
    a.innerHTML += acti;

    actList.appendChild(a);
    contenido.appendChild(actList);

    let e = `<div class="btnevent"><button type="button" class="btn-nevent" data-toggle="modal" data-target="#ModalNuevoEv">Crear nuevo evento!</button></div>`;
    let footer = document.querySelector('#footer');
    footer.innerHTML = e;

    setTimeout(() => {
        let botonE = document.querySelector(".btn-nevent");
        botonE.addEventListener("click", () => {
            let modal = `<div class="modal" id="ModalNuevoEv" tabindex="-1" role="dialog" aria-labelledby="ModalNuevoEv" aria-hidden="true">
               <div class="modal-dialog" role="document">
                 <div class="modal-content">
                   <div class="modal-header">
                     <h5 class="modal-title" id="ModalLabel">Nuevo Evento</h5>
                     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                       <span aria-hidden="true">×</span>
                     </button>
                   </div>
                   <div class="modal-body">

                   <div id="nuevo-evento">
                   <div id="nact-contenido">
                       <div class="nact-content">
                           <div class="nact-image">
                               <img class="nact-img" src="./Graficos/img/form-img.jpg" alt="Imagen Nuevo Evento">
                           </div>
                           <div class="nact-form">
                               <form id="nact-form1">
                                   <h2 class="nact-h2">Crea un nuevo Evento!</h2>
                                   <div class="form-group form-input">
                                       <input class="nact-input" type="text" name="titulo"  value="" required/>
                                       <label for="name" class="form-label">Titulo del Evento</label>
                                   </div>
               
                                   <div class="form-group form-input">
                                       <input class="nact-input" type="date" name="fecha"  value="" required />
                                       <label for="date" class="form-label">Fecha</label>
                                   </div>
               
                                   <div class="form-group form-input">
                                       <input class="nact-input" type="text" name="sitio"  value="" required />
                                       <label for="sitio" class="form-label">Sitio</label>
                                   </div>
               
                                   <div class="form-group form-input">
                                       <input class="nact-input" type="text" name="descripcion"  value="" required />
                                       <label for="descripcion" class="form-label">Descripción</label>
                                   </div>
               
                                   <div class="form-group form-input">
                                       <input class="nact-input" type="number" step="0.01" name="precio" value="" required />
                                       <label for="precio" class="form-label">Precio</label>
                                   </div>
                                                      
                                   <div class="form-radio">
                                       <label class="label-radio"> Selecciona las Plazas disponibles</label>
                                       <div class="radio-item-list">
                                           <span class="radio-item">
                                               <input class="nact-input" type="radio" name="number_people" value="2" id="number_people_2" />
                                               <label for="number_people_2">2</label>
                                           </span>
                                           <span class="radio-item">
                                               <input class="nact-input" type="radio" name="number_people" value="4" id="number_people_4" checked="checked" />
                                               <label for="number_people_4">4</label>
                                           </span>
                                           <span class="radio-item">
                                               <input class="nact-input" type="radio" name="number_people" value="8" id="number_people_8" />
                                               <label for="number_people_8">8</label>
                                           </span>
                                           <span class="radio-item">
                                               <input class="nact-input" type="radio" name="number_people" value="15" id="number_people_15" />
                                               <label for="number_people_15">15</label>
                                           </span>
                                           <span class="radio-item">
                                               <input class="nact-input" type="radio" name="number_people" value="20" id="number_people_20" />
                                               <label for="number_people_20">20</label>
                                           </span>
                                           <span class="radio-item">
                                               <input class="nact-input" type="radio" name="number_people" value="" id="number_people_il" />
                                               <label for="number_people_il">∞</label>
                                           </span>
                                       </div>
                                   </div>
                               </form>
                           </div>
                       </div>
                   </div>
               </div>
               
                   </div>
                   <div class="modal-footer">
                     <button type="button" class="btn btn-secondary" data-dismiss="modal">Cierra</button>
                     <button type="button" class="btn btn-primary" id="boton-guardar-evento">Guardar Nuevo Evento</button>
                   </div>
                 </div>
               </div>
             </div>`;

            actList.innerHTML += modal;

            let botonNuevoEvento = document.querySelector("#boton-guardar-evento");
            botonNuevoEvento.addEventListener("click", async (event) => {
                event.preventDefault();
                console.log("Intento de nuevo evento");

                const form = document.getElementsByTagName('form')[0];   
                const actNueva = new Actividad(
                    (actividades2.length+1),
                    form.titulo.value,
                    "./Graficos/img/vacio.jpg",
                    form.fecha.value,
                    form.sitio.value,
                    form.descripcion.value,
                    form.precio.value, "");
        

                let activ = `
            <div class="act-card">
            <div class="act-contenido">
            <h2 class="act-title">${actNueva.titulo} </h2>
            <p class="act-copy">Fecha:${actNueva.fecha}</p>
            <p class="act-copy">Sitio: ${actNueva.sitio}</p>
            <p class="act-copy">Precio: ${actNueva.precio}</p>
            <button class="act-btn">Apuntame!</button>
            </div>
            </div> 
            `;       
            
             document.querySelector(".act-content").innerHTML+=activ;
                
                console.log("Actividad Nueva" + activ);

                $('#ModalNuevoEv').modal('hide');
            });

        });
    }, 50);







}

/*function NuevoEvento() {
    let e = document.createElement('div');
    e.innerHTML = `<div id="nuevo-evento">
        <div id="nact-contenido">
            <div class="nact-content">
                <div class="nact-image">
                    <img class="nact-img" src="./Graficos/img/form-img.jpg" alt="Imagen Nuevo Evento">
                </div>
                <div class="nact-form">
                    <form id="nact-form1">
                        <h2 class="nact-h2">Crea un nuevo Evento!</h2>
                        <div class="form-group form-input">
                            <input class="nact-input" type="text" name="titulo"  value="" required/>
                            <label for="name" class="form-label">Titulo del Evento</label>
                        </div>

                        <div class="form-group form-input">
                            <input class="nact-input" type="date" name="fecha"  value="" required />
                            <label for="date" class="form-label">Fecha</label>
                        </div>

                        <div class="form-group form-input">
                            <input class="nact-input" type="text" name="sitio"  value="" required />
                            <label for="sitio" class="form-label">Sitio</label>
                        </div>

                        <div class="form-group form-input">
                            <input class="nact-input" type="text" name="descripcion"  value="" required />
                            <label for="descripcion" class="form-label">Descripción</label>
                        </div>

                        <div class="form-group form-input">
                            <input class="nact-input" type="number" step="0.01" name="precio" value="" required />
                            <label for="precio" class="form-label">Precio</label>
                        </div>

                        <div class="form-radio">
                            <label class="label-radio"> Selecciona las Plazas disponibles</label>
                            <div class="radio-item-list">
                                <span class="radio-item">
                                    <input class="nact-input" type="radio" name="number_people" value="2" id="number_people_2" />
                                    <label for="number_people_2">2</label>
                                </span>
                                <span class="radio-item">
                                    <input class="nact-input" type="radio" name="number_people" value="4" id="number_people_4" checked="checked" />
                                    <label for="number_people_4">4</label>
                                </span>
                                <span class="radio-item">
                                    <input class="nact-input" type="radio" name="number_people" value="8" id="number_people_8" />
                                    <label for="number_people_8">8</label>
                                </span>
                                <span class="radio-item">
                                    <input class="nact-input" type="radio" name="number_people" value="15" id="number_people_15" />
                                    <label for="number_people_15">15</label>
                                </span>
                                <span class="radio-item">
                                    <input class="nact-input" type="radio" name="number_people" value="20" id="number_people_20" />
                                    <label for="number_people_20">20</label>
                                </span>
                                <span class="radio-item">
                                    <input class="nact-input" type="radio" name="number_people" value="" id="number_people_il" />
                                    <label for="number_people_il">∞</label>
                                </span>
                            </div>
                        </div>

                        <div class="form-submit">
                            <input type="submit" value="Crear Evento" class="nact-submit" id="submit" name="submit" />
                            <a href="#" class="btn-act">Volver a la lista de actividades</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>`;

    let contenido = document.querySelector('#contenido');
    contenido.appendChild(e);

    let botonNuevoEvento = document.querySelector("#nact-form1");
    botonNuevoEvento.addEventListener("submit", async (event) => {
        event.preventDefault();
        console.log("Intento de nuevo evento");

        const form = document.getElementsByTagName('form')[0];
        const actNueva = new Actividad(
            (actividades2.length+1),
            form.titulo.value,
            "./Graficos/img/vacio.jpg",
            form.fecha.value,
            form.sitio.value,
            form.descripcion.value,
            form.precio.value, "");

        actividades2.push(actNueva);
        console.log("Teo askampa pa toch" + actividades2);
        Page.mostrarPagina("Eventos");
    });


}*/
