const tarjRespo = document.getElementById("tarjRespo");
const tarjJs = document.getElementById ("tarjJs");


window.addEventListener("load",function(){
    if(window.outerWidth<1000){
        cambioTarjeta();       
    }
    if(window.outerWidth<851){
        cambioNav();
    }
})

const cambioTarjeta = ()=>{
    tarjRespo.innerHTML="";
    const card= document.createElement("div");
    card.innerHTML=`<div class="tarjeta1">
                        <div class="num">
                            <h4>Capacitaciones in Company</>
                        </div>
                        <div class="imgServicios">
                            <img src="./assets/img/capCompania.png" alt="Mentoria Optimiza tus Redes">
                        </div>
                        <div class="textCardServ">
                            <p class="detalleCapa">Entrenamientos personalizados para formar asesores de seguros digitalizados.</p>
                        </div>
                        <div class="btnCardServ">
                            <button id="btnSerRespo" class="btnCS"> Empecemos ya! </button>
                        </div>
                    </div>`;
    tarjJs.appendChild(card) ;

    const btn = document.getElementById(`btnSerRespo`);
    btn.addEventListener("click", ()=>{
    window.open("https://walink.co/f68381")

})};


const navBarUl = document.getElementById ("navBarUl");
const cambioNav = ()=>{
    const ulNavBar = document.createElement("ul"); 
    navBarUl.innerHTML = ` 
                            <li><a href=#infoCeo>Sobre mi</a></li>
                            <li><a href="#academia">Academia de Asesores</a></li>
                            <li><a href="#servEmpresas">Servicios para Empresas</a></li>
                        <!-- <li><a href="./pages/cotizaciones.html">Seguros de Viaje</a></li> -->
                            <li><a href="#medios">Medios</a></li>
                            `
            navBarUl.appendChild(ulNavBar);
            };



(function() {
    let v = document.getElementsByClassName("reproductor1");
    for (let n = 0; n < v.length; n++) {
        let p = document.createElement("div");
        p.innerHTML = labnolThumb1(v[n].dataset.id);
        p.onclick = labnolIframe1
        v[n].appendChild(p);
    }
})();


function labnolThumb1() {
    return '<img class="imgVideo" src="../assets/img/foto_vd_jm.png">';
}

function labnolIframe1() {
    let iframe = document.createElement("iframe");
    iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.parentNode.dataset.id + "?autoplay=1&autohide=2&border=0&wmode=opaque&enablejsapi=1&controls=1&showinfo=0");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("id", "youtube-iframe");
    iframe.setAttribute("autoplay", "1");
    this.parentNode.replaceChild(iframe, this);
}

(function() {
    let v = document.getElementsByClassName("reproductor4");
    for (let n = 0; n < v.length; n++) {
        let p = document.createElement("div");
        p.innerHTML = labnolThumb4(v[n].dataset.id);
        p.onclick = labnolIframe4;
        v[n].appendChild(p);
    }
})();

function labnolThumb4() {
    return '<img class="imgVideo" src="../assets/img/foto_vd_LVP.png">';
}

function labnolIframe4() {
    let iframe = document.createElement("iframe");
    iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.parentNode.dataset.id + "?autoplay=1&autohide=2&border=0&wmode=opaque&enablejsapi=1&controls=1&showinfo=0");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("id", "youtube-iframe");
    iframe.setAttribute("autoplay", "1");
    this.parentNode.replaceChild(iframe, this);
}

// index js
const arrayServicios =[];    
const servJson = "servicios.json"
fetch(servJson)
    .then(respuesta => respuesta.json())
    .then(datos=>{
        datos.forEach (servicio=>{
            arrayServicios.push(servicio);
        })
        mostrarServicios();
        mostrarServEmpresas();
    })

const tarjServicios = document.getElementById("tarjServicios");
const mostrarServicios =()=>{
    arrayServicios.forEach((i)=>{
        if (i.id<=4){
        const card = document.createElement("div");
        card.innerHTML= `<div class="tarjeta1">
                            <div class="num">
                                <h3>${i.tipo}</h3>
                                <h4>${i.titulo}</h4>
                            </div>
                            <div class="imgServicios">
                                <img src="${i.img}" alt="${i.titulo}">
                            </div>
                                <p class="detalleCapa">${i.descrip}</p>
                            <div class="btnCardServ">
                                <button id="detalle${i.detalle}" class="btnCS2" >Ver Detalle</button>
                                <button id="boton${i.id}" class="btnCS">${i.btn}</button>
                            </div>
                        </div>
        `;
        tarjServicios.appendChild(card);
        
        const btn = document.getElementById(`boton${i.id}`);
            btn.addEventListener("click", ()=>{
                mostrarFormulario(i.form)
            });
        const detServ = document.getElementById(`detalle${i.detalle}`);
            detServ.addEventListener("click", () => {
                mostrarDetalle(i.detalle);
            });   
    }})
}
const servEmpresas = document.getElementById("servEmpresas");
const mostrarServEmpresas =()=>{
    arrayServicios.forEach((i)=>{
        if (i.id=5){
        tarjRespo.innerHTML= `
                                    
                                    <div class="detCapComp">
                                        <div class="imgServicios2">
                                            <img src="${i.img}" alt="${i.tipo}">
                                        </div>
                                        <div class="textCardServ">
                                            <div class="num">
                                                <h3>${i.tipo}</>
                                            </div>
                                            <p class="detalleCapa">${i.descrip}</p>
                                        </div>
                                    </div>
                                    <div class="btnCardServ2">
                                        <button id="boton${i.id}" class="btnCS"> Empecemos ya! </button>
                                    </div>
                                
        `;
        servEmpresas.appendChild(tarjRespo);
        
        const btn = document.getElementById(`boton${i.id}`);
            btn.addEventListener("click", ()=>{
            window.open(i.form)
        })  
    }})
}
const mostrarDetalle = (detalle) => {
    const detProd = arrayServicios.find(
        (servicio) => servicio.detalle === detalle
    );
    Swal.fire({
        confirmButtonText: false,
        imageUrl: detProd.detalle,
        showCancelButton: true, 
        showConfirmButton: false,
        background: 'transparent',
        width: 500,
        padding:0,
        backdrop: `
                rgba(10, 48, 115, 0.44);
                    `,
    });
};

/* 
const mostrarFormulario1 = (form) => {
    const detProd = arrayServicios.find(
        (servicio) => servicio.form === form    
    )

    Swal.fire({
    html: `<div class="backForm" id="backForm">
        <div class="formCeroACien" id="formCeroACien">
            <div id="saludoForm" class="saludoForm"></div>
            <div class="sldPre" id="sldPre">
            <h1>Formulario de Pre-Inscripcio</h1>
            <h2>Mentoria</h2>
            <h3>De 0 a 100 polizas</h3>
            </div>
        <form class="formulario" id="formulario"  >
            <label class="select">Fecha de inicio
                <select class="formSelect" name="Inicio" id="fechaIni" required />
                    <option selected value="06/05/2023">06 de Mayo de 2023</option>
                </select> 
            </label>
            <label class="select">Nacionalidad
                <select class="formSelect" name="Nacionalidad" id="nac" required />
                    <option selected value="Argentino">Argentino/a</option>
                    <option value="Otra">Otra</option>
                </select> 
            </label>
            <label>
                <input class="input" type="text" name="Email" id="email" required />
                <div class="label-text">Email</div>
            </label>
            <label>
                <input class="input" type="text" name="Nombre" id="nombre" required />
                <div class="label-text">Nombre Completo</div>
            </label>
            <label class="select">Soy un ...
                <select class="formSelect" name="Seleccion" id="descrip" required />
                    <option selected disabled></option>
                    <option value="Aspirante a asesor de seguros">Aspirante a asesor de seguros</option>
                    <option value="Asesor matriculado">Asesor matriculado</option>
                    <option value="Estudiante o Técnico superior">Estudiante o Técnico superior</option>
                    <option value="Otros">Otros</option>
                </select> 
            </label>
            <label>
                <input class="input" type="number" name="Documento" id="doc" required />
                <div class="label-text">DNI/CUIT/CUIL</div>
            </label>
            <label>
                <input class="input" type="tel" name="Telefono" id="tel" required />
                <div class="label-text">Whatsapp</div>
                </label>
            <button type="submit" onClick="postForm()" class="btnForm" id="btnForm">Anotate</button>
        </form>
    </div>
</div>
`,    
        confirmButtonText: false,
        showCancelButton: true, 
        showConfirmButton: false,
        background: 'transparent',
        padding:0,
        width: 500,
        backdrop: `
                rgba(10, 48, 115, 0.44);
                    `,
    })
};


function postForm (){
    let formulario = document.getElementById('formulario');
    formulario.addEventListener('submit', (e)=>{
        e.preventDefault();
        let data = new FormData (formulario);
        fetch('https://script.google.com/macros/s/AKfycbx9dIFjlglnKPNq5RV5FEGo-4W1aomlk_ZEfFenBwxTvmqHCalUfZxmNvYiabby64w/exec', {
            method:"POST",
            body: data
        })
        .then (res => res.text())
        .then ( data => {
            document.getElementById("sldPre").innerHTML =``;
            formulario.innerHTML = ``;
            console.log(data);
            document.getElementById("saludoForm").innerHTML = `<h1>Ya estas Pre-Inscripto</h1>
            <h2>En breve recibiras un mail</h2>
            <h2>con los pasos para confirmar</h2>
            <h2>tu inscripcion</h2>
            <h2>Nos vemos pronto!!</h2>
            ` ;                           
        })
    })} 
 */

// cotizaciones js

