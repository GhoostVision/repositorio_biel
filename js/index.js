//sistema de horarios
var agora = new Date(); //pegar datas e horario atual
var horas = agora.getHours(); //pegar horas
var mostar_horario = document.getElementById(`horario`) //mostrar horas

if (horas < 12){
    mostar_horario.innerText = `Bom dia, Visitante...`
}else if(horas < 18){
    mostar_horario.innerText = `Boa tarde, Visitante...`
}else if(horas < 6){
    mostar_horario.innerText = `Boa Madrugada, Visitante...`
}else{
    mostar_horario.innerText = `Boa Noite, Visitante...`
}