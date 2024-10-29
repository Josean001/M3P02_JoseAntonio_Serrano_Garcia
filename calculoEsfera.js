// Pedir el radio de la esfera al usuario
const radio = parseFloat(prompt("Introduce el radio de la esfera:"));

// Cálculo del volumen de la esfera: (4/3) * PI * radio^3
const volumen = (4 / 3) * Math.PI * Math.pow(radio, 3);

// Mensaje de salida
const formula = "(4/3) * π * radio³";
alert(`El volumen de la esfera se calcula con la fórmula ${formula}, por tanto una esfera de radio ${radio} tiene un volumen de ${volumen.toFixed(2)}`);