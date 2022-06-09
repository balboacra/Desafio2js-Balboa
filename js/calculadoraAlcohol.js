const volumen = 0.13125;

let calculadoraABV = (estilo) => {
    let porcentaje = calcularDensidad(densidadInicial, densidadFinal);
    return "Tu " + estilo + " tiene un " + porcentaje + "% de alcohol"
}

let calcularDensidad = (densidadInicial, densidadFinal) => {
    return (densidadInicial-densidadFinal)*volumen;
}


let estilo = prompt("Que estilo elaboraste?");
let origen = prompt("Que origen tiene?");
let densidadInicial = Number(prompt("Cual fue su densidad inicial?"));
let densidadFinal = Number(prompt("Cual es su densidad final?"));


let densidad = calculadoraABV(estilo);
alert(densidad);