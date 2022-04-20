const procesadores = [
    {id : 1, componente: "Procesador", modelo: 'I3', precio: 17000, imagen: "./images/i3.jpg", cantidad: 0},
    {id : 2, componente: "Procesador", modelo: 'I5', precio: 26000, imagen: "./images/i5.jpg", cantidad: 0},
    {id : 3, componente: "Procesador", modelo: 'I7', precio: 47000, imagen: "./images/i7.jpg", cantidad: 0},
    {id : 4, componente: "Procesador", modelo: 'I9', precio: 85000, imagen: "./images/i9.jpg", cantidad: 0},
];

let URL = './data/data.json';
    

    const carritoDeCompras = []

    repetidos = false;

    procesadores.forEach(procesador =>  {
        
        let contenedor = document.createElement("article");
        contenedor.classList.add("articulo__procesadores");
        contenedor.setAttribute('id', `articulo__${procesador.modelo}`)
        let seccionProcesadores = document.querySelector(".contenedor__procesadores");
        

        contenedor.innerHTML = `
        <div><h3 class ="articulo__titulo">Intel Core ${procesador.modelo}</h3>
        <h5> Precio: $${procesador.precio}</h5></div>
        <img src="${procesador.imagen}" alt="Procesador Intel Core ${procesador.modelo}" class="articulo__imagen">
        <button value=${JSON.stringify(procesador)} class="articulo__boton">+ AGREGAR AL CARRITO</button>
        `

        seccionProcesadores.appendChild(contenedor);

    }); 
  
    let botonProcesador = document.getElementsByClassName("articulo__boton");
    const botonesCompra = Array.from(botonProcesador)

    botonesCompra.forEach( boton => {
        boton.addEventListener('click', apretarBotonProcesador)
    })
        
        function apretarBotonProcesador(boton){

        
        const procesadorElegido = JSON.parse(boton.target.value);
        const procesadorJSON = (procesadorElegido);
        localStorage.setItem('procesador', procesadorJSON);

        let precioTotal = agregarAlcarrito(procesadorElegido);
        mostrar(procesadorElegido);
        botonEliminarCarrito(precioTotal);
        botonComprarTodo(precioTotal);
        

        Swal.fire({
            text: `Has agregado ${procesadorElegido.componente} ${procesadorElegido.modelo} al carrito!`,
            icon: 'success',
            confirmButtonText: ':)',
            timer: 3500,
        });


    };
    

function agregarAlcarrito(compra){
    
    carritoDeCompras.push(compra);
    console.log(carritoDeCompras);
    const precioDeCompra = []

    carritoDeCompras.forEach(compra => {
        precioDeCompra.push(compra.precio);
    })


    console.log(precioDeCompra);

    let precioTotal = 0;
    for(let i = 0; i < precioDeCompra.length;i++){
        precioTotal += precioDeCompra[i];
    }

    console.log(precioTotal);
    return precioTotal;
}

function mostrar(compra){
    
    let sectionCarrito = document.getElementById("seccion__carrito")
    let carrito = document.createElement("div");
    carrito.classList.add("carrito");
    
    compra.cantidad = contador(compra.id);

    let textoCarrito = document.getElementById(`procesador__precio__${compra.id}`)

    if (compra.cantidad == 1){
        carrito.innerHTML = `
        <h3 class="procesador__precio--titulo">Agregaste un procesador ${compra.modelo} al carrito!</h3>
        <p class = "procesador__precio" id = "procesador__precio__${compra.id}">Con un precio de $${compra.precio} </p>
        `
    }
    else if (compra.cantidad >= 2){
        textoCarrito.innerText = `Con un precio de $${compra.precio} (x${compra.cantidad})`
    }



    sectionCarrito.appendChild(carrito);
}

function contador(identificador){

    let objeto = procesadores.find (p => p.id == identificador);
    objeto.cantidad++;
    return objeto.cantidad;
}

function botonComprarTodo(precio){
    let botonComprar = document.getElementById("carrito__botonComprar");
    botonComprar.innerText = `Precio final: $${precio}`

    botonComprar.addEventListener('click', comprarTodoAlerta.bind(null, precio));
}

function botonEliminarCarrito(precioTotal){
    let botonBorrarCarrito = document.getElementById("carrito__botonBorrar");
    console.log(botonBorrarCarrito);
    
    botonBorrarCarrito.addEventListener('click', borrarCarrito.bind(null, precioTotal))

       
    
}

function borrarCarrito(precioTotal){

    carritoDeCompras.splice(0, carritoDeCompras.length);
    console.log(carritoDeCompras);

    let botonComprar = document.getElementById("carrito__botonComprar");
    botonComprar.innerText = `Precio final: $0`
    let sectionCarrito = document.getElementById("seccion__carrito")

    sectionCarrito.innerHTML = " ";

    procesadores.forEach(element => {
        element.cantidad = 0;
    });

    precioTotal = 0;
    return precioTotal;
}


function comprarTodoAlerta(precio){
    
    Swal.fire({
        title: 'Confirma tu compra',
        text: `Se te retiraran $${precio} de tu medio de pago`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Comprar! :D',
        cancelButtonText: 'Cancelar :('
      })
        .then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Felicidades!',
                    'Tu pago ha sido acreditado',
                    'success'
                )
            borrarCarrito();
            }
            if(result.isDismissed){
                Swal.fire(
                    'Tu compra ha sido cancelada',
                    'Tu pago no ha sido acreditado',
                    'error'
                )
            }
        })
}



