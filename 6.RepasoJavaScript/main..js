//Alertas
//alert("Hola soy Francisco Alarcón");

//Variables
let nombre = "Francisco Alarcón"; //La instrucción let declara una variable de alcance local con ámbito de bloque, la cual, opcionalmente, puede ser inicializada con algún valor.
nombre = "francisco";

//Constantes
const apellido = "alarcon"; //Las variables constantes presentan un ámbito de bloque, tal como las variables let, pero su particularidad de que su valor no puede cambiarse y las constantes no se pueden redeclarar. 

//Otra variable
let altura = 187;

//Mostrar por consola 
console.log(nombre); //Console.log() muestra un mensaje en la consola web (o del intérprete JavaScript)
console.log(altura);

//Concatenación
let concatenacion = nombre + " " + apellido;

//Seleccionar elementos del dom
let datos = document.querySelector("#datos"); //Document.querySelector() devuelve el primer elemento del documento(utilizando un recorrido primero en profundidad peordenado de los nodos del documento) que coincida con el grupo especifico de selectores
datos.innerHTML =  `   
        <hr>
        <h1>Soy la caja de datos</h1>
        <h2>Mi nombre es: ${concatenacion}</h2>
        <h3>Mido: ${altura} cm </h3>
`;

//Condiciones
altura = 180;
if(altura >= 185){
    /*La propiedad Element.innerHTML devuelve o establece la sintaxis HTML describiendo los descendientes del elemento. */
    datos.innerHTML += "<h1>Eres una persona alta</h1>";
}else{
    datos.innerHTML += "<h1>Eres una persona bajita</h1>"
}

//Bucles
for(let year = 2000; year <=2023; year++){
    datos.innerHTML += `<h2>Estamos en el año: ${year} </h2>`;
}

//Arrays
let nombres = ["Victor", "Francisco", "Pepe"];

let divNombres = document.querySelector("#nombres");
//divNombres.innerHTML = nombres[2];
divNombres.innerHTML = "<h1>Listado de nombres</h1><ul>"

/*nombres.forEach(nombre =>
    divNombres.innerHTML += "<li>"+nombre+"</li>"    
);*/

for (let nombre of nombres){
    divNombres.innerHTML += "<li>"+nombre+"</li>"
}


divNombres.innerHTML += "</ul>"

//Funciones
const miInformación = (nombre, altura) => {
    let misDatos = `
    <hr/>
    <h1> Soy la caja de datos </h1>
    <h2> Mi nombre es: ${nombre}</h2>
    <h3>Mido: ${altura} cm </h3> `;

    return misDatos;
}

//console.log(miInformación ("Francisco Alarcon", 1.72))

const imprimir = () => {
    let datos = document.querySelector("#datos");
    datos.innerHTML += miInformación ("Francisco Alarcon", 1.72);
}

imprimir();
imprimir();
imprimir();
imprimir();