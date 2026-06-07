const musicBtn = document.getElementById("musicBtn");
const musica = document.getElementById("musica");

const starsContainer = document.getElementById("stars");
const fechaInicio = new Date("2025-06-07T14:30:00");

const tag = document.createElement('script');
let colaCanciones = [];
tag.src =
"https://www.youtube.com/iframe_api";

document.body.appendChild(tag);
const canciones = [

{
    id: "0BNiH0qiQ6M",
    titulo: "All Yours",
    artista: "APRE",
    recuerdo:
    "Me recuerda los primeros meses contigo:3."
},

{
    id: "OKhxJircjQ8",
    titulo: "Young & Unafraid",
    artista: "The Moth & The Flame",
    recuerdo:
    "Los primeros días de verano 2025."
},

{
    id: "0HXMfPLlqgA",
    titulo: "Friday I'm In Love",
    artista: "The Cure",
    recuerdo:
    "Tú me enseñaste este grupouwu."
},
{
    id: "V9VM1SI1uYw",
    titulo: "flutter",
    artista: "julie",
    recuerdo:
    "Lo caótica que puede ser la vida."
},
{
    id: "QrVl7mgVSg0",
    titulo: "Prune, You Talk Funny",
    artista: "Gus Dapperton",
    recuerdo:
    "nwn"
},
{
    id: "xvQAzsehJTU",
    titulo: "Vamos A Querernos",
    artista: "Mane & Lev",
    recuerdo:
    ":3"
},
{
    id: "lhKLqmQZ7RU",
    titulo: "Cariñito",
    artista: "RUZZI",
    recuerdo:
    "No me abandones cariñito:3."
},
{
    id: "7gxdijAkWdE",
    titulo: "Everything Matters",
    artista: "AURORA & Pomme",
    recuerdo:
    "To me, to me, to meeeexdd."
},
{
    id: "uxzdogX7sps",
    titulo: "Si",
    artista: "Torreblanca",
    recuerdo:
    "Que más puedes peeedir."
},
{
    id: "FjkQujyHxYQ",
    titulo: "Oceans",
    artista: "The Blue Stones",
    recuerdo:
    "Mi promesa de llevarte a conocer el mar uvu."
},
{
    id: "_-I47u6axbM",
    titulo: "I Walk the Line",
    artista: "Jfarrari",
    recuerdo:
    "tururu."
},
{
    id: "Pc3-SYOjNb4",
    titulo: "Is My Love Enough?",
    artista: "White Lies",
    recuerdo:
    "UwU:3."
},
{
    id: "imK8zE9Ux0Y",
    titulo: "Addicted",
    artista: "JMSN",
    recuerdo:
    "Adictivoeue"
},
{
    id: "2PTSFB2FqUE",
    titulo: "Tú",
    artista: "Juanpalitoschinos",
    recuerdo:
    "Túuwu."
},
{
    id: "5TcX7h7wPnQ",
    titulo: "El pecado soy yo",
    artista: "Zero",
    recuerdo:
    "7w7."
},
{
    id: "SVNXlwo0pO8",
    titulo: "Los Imanes",
    artista: "Odisseo",
    recuerdo:
    "Es imposible uwu."
},
{
    id: "MS-hBmuL83w",
    titulo: "Heaven Knows",
    artista: "54 Ultra",
    recuerdo:
    "El cielo sabe que eres para mí uvu."
},
{
    id: "nzSaB1vyviE",
    titulo: "24/7",
    artista: "Moyka",
    recuerdo:
    "Svn."
},
{
    id: "Z7IFYKHKjZM",
    titulo: "Dime Cómo Tú Quieras",
    artista: "Los Mesoneros",
    recuerdo:
    "dime."
}


];
let player;
let indice = 0;

function onYouTubeIframeAPIReady(){

    player = new YT.Player('player', {

        height:'0',
        width:'0',

        videoId:canciones[0].id

    });

    actualizarInfo();
    
}
function actualizarInfo(){

    document.getElementById("songTitle")
        .textContent =
        canciones[indice].titulo;

    document.getElementById("songArtist")
        .textContent =
        canciones[indice].artista;

    document.getElementById("songMemory")
        .textContent =
        canciones[indice].recuerdo;
}
function siguienteCancion(){

    if(colaCanciones.length === 0){

        mezclarCanciones();

    }

    indice = colaCanciones.pop();

    player.loadVideoById(
        canciones[indice].id
    );

    actualizarInfo();
}
function anteriorCancion(){

    indice--;

    if(indice < 0){
        indice = canciones.length - 1;
    }

    player.loadVideoById(
        canciones[indice].id
    );

    actualizarInfo();
}
const playBtn =
document.getElementById("playBtn");

let reproduciendo = false;

playBtn.addEventListener("click", () => {

    if(!reproduciendo){

        player.playVideo();

        playBtn.textContent = "⏸";

        reproduciendo = true;

    }else{

        player.pauseVideo();

        playBtn.textContent = "▶";

        reproduciendo = false;
    }

});
for(let i = 0; i < 250; i++){

    const star = document.createElement("div");

    star.classList.add("star");

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.animationDuration =
        (Math.random() * 4 + 2) + "s";

    starsContainer.appendChild(star);
}
function mezclarCanciones(){

    colaCanciones =
        [...Array(canciones.length).keys()];

    for(
        let i = colaCanciones.length - 1;
        i > 0;
        i--
    ){

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );

        [colaCanciones[i], colaCanciones[j]]
        =
        [colaCanciones[j], colaCanciones[i]];
    }

}
mezclarCanciones();
function actualizarContador() {

    const ahora = new Date();
    const diferencia = ahora - fechaInicio;

    const segundos = Math.floor(diferencia / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);
    const semanas = Math.floor(dias / 7);

    const meses =
        (ahora.getFullYear() - fechaInicio.getFullYear()) * 12 +
        (ahora.getMonth() - fechaInicio.getMonth());

    document.getElementById("contador").innerHTML = `
        <div class="contador-grid">

            <div class="card-tiempo">
                <div class="valor">${meses}</div>
                <div class="label">Meses</div>
            </div>

            <div class="card-tiempo">
                <div class="valor">${semanas}</div>
                <div class="label">Semanas</div>
            </div>

            <div class="card-tiempo">
                <div class="valor">${dias}</div>
                <div class="label">Días</div>
            </div>

            <div class="card-tiempo">
                <div class="valor">${horas.toLocaleString()}</div>
                <div class="label">Horas</div>
            </div>

            <div class="card-tiempo">
                <div class="valor">${minutos.toLocaleString()}</div>
                <div class="label">Minutos</div>
            </div>

            <div class="card-tiempo">
                <div class="valor">${segundos.toLocaleString()}</div>
                <div class="label">Segundos</div>
            </div>

        </div>

        <p style="margin-top:30px;">
            ❤️ Y cada segundo te amo más y más:3 ❤️
        </p>
    `;
}

actualizarContador();
setInterval(actualizarContador, 1000);


function mostrarRecuerdo(){

    const random =
        recuerdos[
            Math.floor(Math.random()*recuerdos.length)
        ];

    document.getElementById("recuerdo").textContent =
        random;
}
const carta = `
Gracias por este primer año.

Gracias por cada sonrisa,
por cada conversación,
por cada partida juntos,
por cada dibujo que me has regalado
y por cada momento que hemos compartido:3.

Este pequeño espacio en internet
no puede contener todo lo que significas para mí,
pero quería crear algo que quedara para nosotros.

Si este año ha sido tan especial,
no puedo imaginar lo hermoso que será todo lo que viene.

Te amo mucho mucho mucho mucho mucho:3
❤️
`;

const target = document.getElementById("typewriter");

let index = 0;
let started = false;

function escribirCarta(){

    if(index < carta.length){

        target.textContent += carta.charAt(index);

        index++;

        setTimeout(escribirCarta, 40);
    }
}

const observer = new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting && !started){

            started = true;

            escribirCarta();
        }

    });

},
{
    threshold:0.5
}

);

observer.observe(target);
setInterval(() => {

    const star = document.createElement("div");

    star.style.position = "fixed";
    star.style.width = "3px";
    star.style.height = "3px";
    star.style.background = "white";

    star.style.left = Math.random() * window.innerWidth + "px";
    star.style.top = "-10px";

    star.style.boxShadow = "0 0 15px white";

    star.style.zIndex = "-1";

    document.body.appendChild(star);

    star.animate([
        {
            transform:"translate(0,0)"
        },
        {
            transform:"translate(-400px,400px)"
        }
    ],{
        duration:1500
    });

    setTimeout(() => star.remove(), 1500);

}, 5000);
const recuerdos = [

    {
        imagen: "img/rec00.jpg",
        texto: "Mi niña hermosa, amo todo de ti."
    },

    {
        imagen: "img/rec01.jpg",
        texto: "Adoro tu risa y tu bella sonrisa."
    },

    {
        imagen: "img/rec02.jpg",
        texto: "Tus besos son lo más dulce de este mundo."
    },

    {
        imagen: "img/rec03.jpg",
        texto: "El olor de tu cabello es algo indescriptible."
    },
    {
        imagen: "img/rec04.jpg",
        texto: "Me encanta estar contigo y con nuestro Balatro."
    },
    {
        imagen: "img/rec05.jpg",
        texto: "Te conocí en aquella tarde que el cielo se cayó:3."
    },
    {
        imagen: "img/rec06.jpg",
        texto: "Mi promesa de amarte es para toda la vida."
    },
    {
        imagen: "img/rec07.jpg",
        texto: "Siempre eres tan linda y detallista."
    },
    {
        imagen: "img/rec08.jpg",
        texto: "Me encanta ver cosas contigo:3 siempre me llenas de paz."
    }

];

let indiceRecuerdo = 0;

function mostrarRecuerdo(){

    const imagen =
        document.getElementById("recuerdo-img");

    const texto =
        document.getElementById("recuerdo-texto");

    imagen.style.opacity = 0;

    setTimeout(() => {

        imagen.src =
            recuerdos[indiceRecuerdo].imagen;

        texto.textContent =
            recuerdos[indiceRecuerdo].texto;

        imagen.style.opacity = 1;

        indiceRecuerdo++;

        if(indiceRecuerdo >= recuerdos.length){
            indiceRecuerdo = 0;
        }
        imagen.style.transform =
    `rotate(${Math.random()*8-4}deg)`;
    }, 300);
}
