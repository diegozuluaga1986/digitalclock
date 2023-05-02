const mostrarReloj = ()=>{
    let fecha = new Date();
    let hr= formatoHora(fecha.getHours());//El método getHours() retorna la hora de la fecha especificada, de acuerdo a la hora local.
    let min = formatoHora(fecha.getMinutes());//retorna los minutos de la hora actual
    let seg = formatoHora(fecha.getSeconds());// reetorma los segundos
    document.getElementById("hora").innerHTML= `${hr}:${min}:${seg}`;//toma el elemnto hora del div y coloca la nueva informacion de las variables

    const meses=["Ene", "Feb", "Mar", "Abr","May", "Jun", "Jul", "Ago","Sep","Oct", "Nov", "Dic"]
    const dias=["Dom", "Lun", "Mar","Mie", "Jue","Vie","Sab" ]
    let diaSemana= dias[fecha.getDay()]; //El método getDay() devuelve el día de la semana de la fecha especificada en función de la fecha local; siendo 0 (Domingo) el primer día.
    let dia= fecha.getDate();//El método getDate() devuelve el día del mes para la fecha especificada de acuerdo con la hora local.
    let mes = meses[fecha.getMonth()]; //El método getMonth() //devuelve el mes del objeto Date según la hora local, donde el número cero indica el primer mes del año.
    let fechatexto = `${diaSemana},${dia},${mes}, 2022`;
    document.getElementById("fecha").innerHTML= fechatexto;
    document.getElementById("contenedor").classList.toggle("animar");//añade clase para modificar el css del  contenedor
}


const formatoHora = (hora)=>{  // para que tenga 2 digitos cuando es menor de 10 es decir de 1 a 01
    if (hora <10)
    hora = "0"+ hora;
    return hora;

}

setInterval(mostrarReloj, 1000); //llama la funcion cada segundo con set interval usando la funcion mostrareloj
// setinterval carga el script cada cierto tiempo. 1 segundo es 1000
