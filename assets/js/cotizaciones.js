window.onscroll = function() {myFunction()};

var navegador2 = document.getElementById("navegador2");
var sticky = navegador2.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navegador2.classList.add("sticky")
    } else {
        navegador2.classList.remove("sticky");
    }
} 


const arraySegViajes =[];    
const segViajeJson = "../segViaje.json" 
fetch(segViajeJson)
    .then(respuesta => respuesta.json())
    .then(datos=>{
        datos.forEach (servicio=>{
            arraySegViajes.push(servicio);
        })
        mostrarServiciosViaje();
    });

    const detalleCotizador = document.getElementById("detalleCotizador");

    const mostrarDetalle1 = ()=>{
        detalleCotizador.innerHTML='';
        const card = document.createElement("div");
        card.innerHTML= `<div class="cardProdSeguroViaje"> </div>`;
        detalleCotizador.appendChild(card);
    }
    const mostrarDetalle2 = ()=>{
        detalleCotizador.innerHTML='';
        const card = document.createElement("div");
        card.innerHTML= `<div class="cardProdSeguroViaje2"> </div>`;
        detalleCotizador.appendChild(card);
    }
    const mostrarDetalle3 = ()=>{
        detalleCotizador.innerHTML='';
        const card = document.createElement("div");
        card.innerHTML= `<div class="cardProdSeguroViaje3"> </div>`;
        detalleCotizador.appendChild(card);
    }

    const mostrarDetalle4 = ()=>{ 
        detalleCotizador.innerHTML='';
        const card = document.createElement("div");
        card.innerHTML= `<div class="cardProdSeguroViaje4"> </div>`;
        detalleCotizador.appendChild(card)
        console.log('click'); 
    }


    const contenedorServiciosViaje = document.getElementById("contenedorServiciosViaje");     
    const mostrarServiciosViaje =()=>{
        arraySegViajes.forEach((i)=>{
            const card = document.createElement("div");
            card.innerHTML= `
                            <article class="card" style = "background-image: url(${i.img});">
                                <div class="temporary_text">
                                    <h3>${i.tipo}</h3>
                                </div>
                                <div class="card_content">
                                    <p class="card_description">${i.descrip}</p>
                                    <span class="card_subtitle"><h3>${i.titulo}</h3></span>
                                    <div class="cardBtnCotiza">
                                    ${i.id === 1 ? `
                                    <button id="btn1_${i.id}" class="btnCS2">${i.btn1}</button>
                                    <button id="btn2_${i.id}" class="btnCS2">${i.btn2}</button>
                                    <button id="btn3_${i.id}" class="btnCS2">${i.btn3}</button>
                                    ` :
                                    `<button id="btnCotiza_${i.id}" class="btnCS2">${i.btn}</button>`}
                                    </div>
                                </div>
                            </article>
            `;
            contenedorServiciosViaje.appendChild(card);

            const btn1 = document.getElementById(`btn1_${i.id}`);
            const btn2 = document.getElementById(`btn2_${i.id}`);
            const btn3 = document.getElementById(`btn3_${i.id}`);
            const btnCotiza = document.getElementById(`btnCotiza_${i.id}`);

    i.id === 1
        ? (
            btn1.addEventListener("click", mostrarDetalle1),
            btn2.addEventListener("click", mostrarDetalle2),
            btn3.addEventListener("click", mostrarDetalle3)
        ): btnCotiza.addEventListener("click", mostrarDetalle4);

        
        })
    };
    

