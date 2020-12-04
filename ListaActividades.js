export {ActividadCard};

async function listaAct() {
    let act_json;

    await fetch('json/Actividades.json')
    .then(response => response.json())
    .then(data => act_json = data);

    for (let a of act_json) {
        actividades.push(new Actividad(a.id, a.nombre, a.foto, a.fecha, a.sitio, a.descripcion, a.plazas));
    }


}
    //COGER del Json Actividades cada act

    
//Hola
///PAGINA ACTIVIDADES
   
async function ActividadCard(){
    let a = document.createElement('div');
    a.classList.add('actividad');
    a.innerHTML = `
    <main class="act-content">
    <div class="act-card">
        <div class="act-contenido">
            <h2 class="act-title"> ${this.nombre} </h2>
            <p class="act-copy">${this.descripcion}</p>
            <p class="act-copy">Fecha: ${this.fecha}</p>
            <p class="act-copy">Sitio: ${this.sitio}</p>
            <p class="act-copy">Plazas: ${this.plazas}</p>
            <button class="act-btn">Apuntame!</button>
        </div>
    </div>
    </main>             
    `; 

    let contenido = document.querySelector('#contenido');
        let actList = document.createElement('div');
        actList.classList.add('actList');
        contenido.appendChild(actList);

        for (let a of actividades) {
            let actElement = a.ActividadCard();
            actList.appendChild(actElement);
        }

    }