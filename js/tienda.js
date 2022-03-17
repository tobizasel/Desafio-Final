

const tarjetasGraficas = [
    {id : 1, componente: "Tarjeta Grafica", modelo: "GTX 1650", precio: 60000},
    {id : 2, componente: "Tarjeta Grafica", modelo: "GTX 1660", precio: 110000},
    {id : 3, componente: "Tarjeta Grafica", modelo: "RTX 2060", precio: 120000},
    {id : 4, componente: "Tarjeta Grafica", modelo: "RTX 3060", precio: 160000},
];

const memoriasRam = [
    {id : 1, componente: "Memoria Ram", modelo: "4gb", precio: 6000},
    {id : 2, componente: "Memoria Ram", modelo: "8gb", precio: 9000},
    {id : 3, componente: "Memoria Ram", modelo: "16gb", precio: 16000},
    {id : 4, componente: "Memoria Ram", modelo: "32gb", precio: 22000},
];

const procesadores = [
    {id : 1, componente: "Procesador", modelo: 3, precio: 17000, imagen: "../images/i3.jpg"},
    {id : 2, componente: "Procesador", modelo: 5, precio: 26000, imagen: "../images/i5.jpg"},
    {id : 3, componente: "Procesador", modelo: 7, precio: 47000, imagen: "../images/i7.jpg"},
    {id : 4, componente: "Procesador", modelo: 9, precio: 85000, imagen: "../images/i9.jpg"},
];

procesadores.forEach(procesador =>  {
    
    let contenedor = document.createElement("div");
    contenedor.classList.add("articulos__procesadores");
    let seccionProcesadores = document.getElementsByClassName("seccion__procesadores");

    contenedor.innerHTML = `<article class="articulo__procesadores" id="articulo__i3">
    <h3>Intel Core ${procesador.modelo}</h3>
    <img src="${procesador.imagen}" alt="Procesador Intel Core I${procesador.modelo}" class="articulo__imagen">
    <button class="articulo__boton procesador__compra__1" onclick="clickBoton(${procesador.precio}, ${procesador.modelo})">+ AGREGAR AL CARRITO</button>
    </article>`
    
    

    document.body.appendChild(contenedor)

});

function clickBoton(precio, modelo){
    
    

    let carrito = document.createElement("div");
    carrito.classList.add("carrito");

    carrito.innerHTML = `<h3>Compraste un Procesador I${modelo}</h3>
                        <p class = "procesador__precio">Con un precio de $${precio}</p>`

    
    document.body.appendChild(carrito)
    
}