// let validacion = true;

//     do {
//         let precio = comprar();
//         if (precio){
//             calcularCuotas(precio);
//         }
//     } while (validacion == false);


// function comprar(){
    
//     let elegir;
//     let elegirCompra;
//     let compra;
//     let numeroValido = true;
//     elegir = prompt("Bienvenido a la tienda de componentes\n Que vas a comprar?\n" + "1. Procesadores  2. Tarjetas graficas  3. Memorias ram")

//     switch(elegir){
//         case '1':
//             for (const productos of procesadores) {
//                 console.log(`${productos.componente}`, `${productos.id}` + ':' , `${productos.modelo}`, '$' +`${productos.precio}`)
//             }

//             elegirCompra = prompt(`Que procesador vas a llevar?`);
//             compra = procesadores.find(p => p.id == elegirCompra);
            
//             break;
        
//         case '2':
//             for (const productos of tarjetasGraficas) {
//                 console.log(`${productos.componente}`, `${productos.id}`, `${productos.modelo}`, `${productos.precio}`)
//             }

//             elegirCompra = prompt(`Que Targeta grafica vas a llevar?`)
//             compra = tarjetasGraficas.find(p => p.id == elegirCompra)
//             break;

//         case '3':
//             for (const productos of memoriasRam) {
//                 console.log(`${productos.componente}`, `${productos.id}`, `${productos.modelo}`, `${productos.precio}`)
//             }

//             elegirCompra = prompt(`Cuanta Memoria ram vas a llevar?`)
//             compra = memoriasRam.find(p => p.id == elegirCompra)
//         break;

//         default:
//             alert("ingresa un numero valido para pasar a la tienda");
//             numeroValido = false;
//             validacion = false;
//         break;
//     }

//     if(numeroValido){
//         console.log("Acabaste de comprar:", compra.componente , compra.modelo);
//         console.log("Precio al contado: $" + compra.precio);
//         return compra.precio;
//     }
// }

// function calcularCuotas(precio){
//     let precioCuota;
//     let precioFinal;
//     let cuotas = prompt("En cuantas cuotas lo queres pagar?" + "\n1 cuota: 0% interes \n3 cuotas: 10% interes \n6 cuotas: 20% interes \n12 cuotas: 50% interes" );

//     switch(cuotas){
//         case '1':
//             validacionCuotas = false;
//             console.log("El precio final es $" + precio); 
//             validacion = true;   
//         break
//         case '3':
//             precioFinal = parseInt(precio) + precio / 10;
//             precioCuota = precioFinal / cuotas;
//             console.log("El precio de cada cuota es " +  precioCuota + "$" + "\nEl precio final es " + precioFinal + "$");
//             validacion = true;
//         break;
//         case '6':
//             precioFinal = parseInt(precio) + precio / 5;
//             precioCuota = precioFinal / cuotas;
//             console.log("El precio de cada cuota es " +  precioCuota + "$" + "\nEl precio final es " + precioFinal + "$");
//             validacion = true;
//         break;

//         case '12':
//             precioFinal = parseInt(precio) + precio / 2;
//             precioCuota = precioFinal / cuotas;
//             console.log("El precio de cada cuota es " +  precioCuota + "$" + "\nEl precio final es " + precioFinal + "$");
//             validacion = true;
//         break;

//         default:
//             console.log("Por favor ingresa una de las cuotas ofrecidas por el sistema")
//         break;
//     }
// }