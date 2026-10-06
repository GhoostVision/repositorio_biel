var agora = new Date();
var horas = agora.getHours();
var mostar_horario = document.getElementById(`horario`)

if (horas < 12){
    mostar_horario.innerText = `Bom dia, Visitante...`
}else if(horas < 18){
    mostar_horario.innerText = `Boa tarde, Visitante...`
}else if(horas < 6){
    mostar_horario.innerText = `Boa Madrugada, Visitante...`
}else{
    mostar_horario.innerText = `Boa Noite, Visitante...`
}