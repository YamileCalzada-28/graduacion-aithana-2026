const eventDate = new Date("August 2, 2026 16:00:00").getTime();

setInterval(() => {

const now = new Date().getTime();
const diff = eventDate - now;

document.getElementById("days").innerHTML =
Math.floor(diff/(1000*60*60*24));

document.getElementById("hours").innerHTML =
Math.floor((diff%(1000*60*60*24))/(1000*60*60));

document.getElementById("minutes").innerHTML =
Math.floor((diff%(1000*60*60))/(1000*60));

document.getElementById("seconds").innerHTML =
Math.floor((diff%(1000*60))/1000);

},1000);
function toggleMusic(){

const music = document.getElementById("music");
const btn = document.getElementById("musicBtn");

if(music.paused){

music.play();
btn.innerHTML = "⏸ Pausar Canción";

}else{

music.pause();
btn.innerHTML = "▶ Reproducir Canción";

}

}