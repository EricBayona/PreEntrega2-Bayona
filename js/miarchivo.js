alert("bienvenidos a Despensa Coder");
alert("Seleccione los Articulos que desea comprar");
let eleccion = prompt("1-Azucar, 2-Fideo, 3-Arroz, 4-Aceite, 5-Leche, 6-Ver Precios 7-Terminar");
const precioAzucar = 700;
const precioFideo = 1000;
const precioArroz = 950;
const precioAceite = 3300;
const precioLeche = 2200;
let cantidadAzucar = 0;
let cantidadFideo = 0;
let cantidadArroz = 0;
let cantidadAceite = 0;
let cantidadLeche = 0;
while (eleccion != "7") {
    switch (eleccion) {
        case "1":
            cantidadAzucar = parseInt(prompt('Cuantas unidades?'));
            break;
        case "2":
            cantidadFideo = parseInt(prompt('Cuantas unidades?'));
            break;
        case "3":
            cantidadArroz = parseInt(prompt('Cuantas unidades?'));
            break;
        case "4":
            cantidadAceite = parseInt(prompt('Cuantas unidades?'));
            break;
        case "5":
            cantidadLeche = parseInt(prompt('Cuantas unidades?'));
            break;
        case "6":
            alert(`Precios: Azucar ${precioAzucar},Fideo ${precioFideo}, Arroz ${precioArroz}, Aceite ${precioAceite}, Leche ${precioLeche}`);
            break
    }
    eleccion = prompt("1-Azucar, 2-Fideo, 3-Arroz, 4-Aceite, 5-Leche, 6-Ver Precios 7-Terminar");
}
alert("Compra realizada $ " +((precioAzucar * cantidadAzucar) + (precioFideo * cantidadFideo) + (precioArroz * cantidadArroz) + (precioAceite * cantidadAceite) +(precioLeche * cantidadLeche)))

