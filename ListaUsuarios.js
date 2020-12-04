export {UsuarioCard};

async function listaUser() {
    var user_json;

    await fetch('json/Usuarios.json')
    .then(response => response.json())
    .then(data => user_json = data);


    for (let u of user_json) {
        usuarios.push(new Usuario(u.id, u.nombre, u.fecha, u.ciudad, u.email, u.sexo, u.quiero, u.intereses, u.actividades));
    }

}
    //COGER del Json Usuarios cada user




///PAGINA USUARIOS
   
// https://codepen.io/mrsahar/pen/jRjmdL

// https://www.w3schools.com/howto/howto_css_profile_card.asp

async function UsuarioCard(){
        let u = document.createElement('div');
        u.classList.add('usuario');
        u.innerHTML = `
        <div class="users">
        <div class="col-sm">
            <div class="card" style="width: 18rem;">
                <img src="${this.foto}" class="card-img-top" alt="${this.nombre}">
                    <div>
                        <h5>${this.nombre}</h5>
                        <p> Fecha de Nacimiento: ${this.nacim}</p>
                        <p> Sexo: ${this.sexo}</p>
                        <p> Ciudad: ${this.ciudad} </p>
                        <p> Que Busca: ${this.quiero} </p>
                        <p> Intereses: ${this.intereses} </p>
                        <a href="#" class="btn btn-primary">Like!</a>
                        <a href="#" class="btn btn-danger">Next!</a>
                    </div>
            </div>
        </div>
        </div>
        `;
        

        let contenido = document.querySelector('#contenido');
        let userList = document.createElement('div');
        userList.classList.add('userList');
        contenido.appendChild(userList);

        for (let u of usuarios) {
            let userElement = u.UsuarioCard();
            userList.appendChild(userElement);
        }

    }