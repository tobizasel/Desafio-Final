const tarjetasGraficas = [
    {id: 1, componente: "Tarjeta Grafica", modelo: "GTX 1650", precio: 60000},
    {id: 2, componente: "Tarjeta Grafica", modelo: "GTX 1660", precio: 110000},
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
    {id : 1, componente: "Procesador", modelo: 'I3', precio: 17000, imagen: "./images/i3.jpg"},
    {id : 2, componente: "Procesador", modelo: 'I5', precio: 26000, imagen: "./images/i5.jpg"},
    {id : 3, componente: "Procesador", modelo: 'I7', precio: 47000, imagen: "./images/i7.jpg"},
    {id : 4, componente: "Procesador", modelo: 'I9', precio: 85000, imagen: "./images/i9.jpg"},
];

const carritoDeCompras = []

repetidos = false;

procesadores.forEach(procesador =>  {
    
    let contenedor = document.createElement("div");
    contenedor.classList.add("articulos__procesadores");
    let seccionProcesadores = document.querySelector(".seccion__procesadores");

    contenedor.innerHTML = `<article class="articulo__procesadores" id="articulo__i3">
    <h3>Intel Core ${procesador.modelo}</h3>
    <img src="${procesador.imagen}" alt="Procesador Intel Core ${procesador.modelo}" class="articulo__imagen">
    <button class="articulo__boton procesador__compra__1">+ AGREGAR AL CARRITO</button>
    </article>`
    
    contenedor.addEventListener('click', function (){
        
        
        const procesadorJSON = JSON.stringify(procesador);
        localStorage.setItem('procesador', procesadorJSON);

        agregarAlcarrito(procesador);

        let sectionCarrito = document.getElementById("seccion__carrito")
        let carrito = document.createElement("div");
        carrito.classList.add("carrito");


        carrito.innerHTML = `<h3>Compraste un Procesador ${procesador.modelo}</h3>
                            <p class = "procesador__precio id = "procesador__precio__${procesador.id}">Con un precio de $${procesador.precio}</p>`
                           
        
        sectionCarrito.appendChild(carrito)


        Swal.fire({
            title: 'Felicidades',
            text: `Has comprado ${procesador.componente} ${procesador.modelo}`,
            icon: 'success',
            confirmButtonText: 'ok'
        })


    });
    seccionProcesadores.appendChild(contenedor);
});

function agregarAlcarrito(modelo){
    
    carritoDeCompras.push(modelo);
    console.log(carritoDeCompras);
}


