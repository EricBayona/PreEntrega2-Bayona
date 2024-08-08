class ListaDeCompras{
    constructor(){
        this.compras=[]
    }
    agregarAlCarrito(producto){
        this.compras.push(producto)
    }
    eliminarDelCarrito(producto){
        this.compras= this.compras.filter(compra => compra !== producto)
    }
    buscarProducto(producto){
        if(this.compras.includes(producto)){
            alert(`Si se en cuentra en la lista el producto: ${producto} `);
        }else{
            alert(`No se en cuentra en la lista el producto: ${producto} `);
        }
    }
    mostrarLista(){
        return alert(this.compras);
        
    }
}

const lista = new ListaDeCompras()

while (true){
    const elegir = prompt("¿Que desea realizar?(agregar/eliminar/buscar/ver lista/salir)")
    if (elegir === "agregar"){
        const producto = (prompt("Ingrese el Producto para agregar en la lista de compras"));
        lista.agregarAlCarrito(producto)
    }
    else if(elegir === "eliminar"){
        const producto =(prompt("Ingrese el Producto para eliminar de la lista de compras"));
        lista.eliminarDelCarrito(producto)
    }
    else if(elegir==="buscar"){
        const producto =(prompt("Ingrese el Producto para buscar en la lista de compras"));
        lista.buscarProducto(producto)}
    else if(elegir=== "ver lista"){
        lista.mostrarLista()
    }
    else if(elegir === "salir"){
        break;
    }else{
        console.log("Acción no válida. Intenta de nuevo.");
    }
}
console.log(lista);
// const numero1 = parseInt(prompt("ingrese un numero"))
// const numero2 = parseInt(prompt("ingrese un segundo numero"))

// class Sumar{
//     constructor(numero1, numero2){
//         this.numero1 = numero1; 
//         this.numero2 = numero2; 
//     }
//     sumar(){
//         return (this.numero1 + this.numero2)
//     }
// }
// const operacion = new Sumar(numero1, numero2)
// const resultado = operacion.sumar()
// console.log("El resultado de la suma es: ", resultado);



// const numeros =[17, 42, 8, 91, 55, 29, 73, 64, 3, 87, 12, 50, 38, 19, 67, 95, 23, 76, 5, 61]

// console.log("¿El número 1 se encuentra en el array numeros?")
// console.log(numeros.some((numero)=>numero == numero1));


// const numerosPares = numeros.filter((numero) => numero % 2 == 0)
// console.log(numerosPares); //filtar los numero pares