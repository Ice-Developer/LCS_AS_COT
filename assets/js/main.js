const tarjRespo = document.getElementById("tarjRespo");
const tarjJs = document.getElementById ("tarjJs");


window.addEventListener("load",function(){
    if(window.outerWidth<851){
        cambioNav();
    }
})


// navegador

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


//videos youtube
(function() {
    let v = document.getElementsByClassName("reproductorVideoAA");
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

