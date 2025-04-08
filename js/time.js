function currentime() {
    let date = new Date (); 
    let hh = date.getHours(); 
    let mm = date.getMinutes();
    let ss = date.getSeconds(); 
    let year = date.getFullYear(); 
    let month= date.getMonth();
    let day = date.getDate(); 


    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;
    month = (month <10) ? ("0" +( month + 1) ) : ( month + 1 );  
    day = (day < 10) ? ("0" + day) : day ;

    let time = `${hh}:${mm}:${ss}`;
    let watch = document.querySelector('#watch');
    watch.innerHTML = time;

    let currentdate = `${day}/${month}/${year}`;
    let calendar = document.querySelector("#dateHtml");
    calendar.innerHTML = currentdate;


    menssage(time);
}


setInterval(currentime, 1000);

function menssage (time) {
    const text =document.getElementById("message")

  
if (time >= "00:01:00" && time <= "07:00:00" ) {
    text.innerText= "Es hora de descansar. Apaga y sigue mañana";

} else if ( time > "07:01:00" && time < "12:00:00" ) {
    text.innerText = "Buenos días, desayuna fuerte y a darle al código";

}else if ( time > "12:01:00" && time < "14:00:00" ) {
    text.innerText = "Echa un rato más pero no olvides comer";

}else if ( time > "14:01:00" && time < "16:00:00" ) {
    text.innerText = "Espero que hayas comido";

}else if ( time > "16:01:00" && time < "18:00:00" ) {
    text.innerText = " Buenas tardes, el último empujón";

}else if ( time > "18:01:00" && time < "22:00:00" ) {
    text.innerText = "Esto ya son horas extras, ... piensa en parar pronto";

}else  {
    text.innerText = "Buenas noches, es hora de pensar en parar y descansar ";

}
}
