//SIMULADOR DE COMPRA

//CUPON DE DESCUENTO 30%: promo
//CUPON DE DESCUENTO 50%: coderhouse

//Funciones
function agregarCarrito(){
    alert(`${productos.toUpperCase()} agregado al carrito.`)
}

function cuponDescuento(total, descuento){
    totalFinal = total*descuento
}

total = 0
//Solicitud nombre cliente
let nombreCliente = prompt("Ingrese su nombre").toUpperCase()
    alert(`Hola ${nombreCliente}, ahora comenzaremos a procesar su compra`)

//Cantidad de producto que cliente desea comprar
let cantidad = parseInt(prompt("¿Cuantos productos necesita?"))
    while(isNaN(cantidad)){ 
        cantidad = parseInt (prompt (`ERROR! Tipo de dato incorrecto. Ingrese la cantidad de productos que necesita`)) //Validacion tipo de dato number 
    }

    for (let i=1 ; i<=cantidad ; i++){
        productos = prompt(`Por favor, ingrese el NOMBRE DEL PRODUCTO N°${i} que desea comprar`)

        productos = productos.toLowerCase()

        while (productos != "buzo" && productos != "campera" && productos != "pantalon" && productos != "gorrito" ){
            productos = prompt (`No existe el producto "${productos}". Por favor ingrese el NOMBRE DEL PRODUCTO CORRECTAMENTE`).toLowerCase() //Validacion Producto
        }
        if (productos == "buzo"){
            agregarCarrito(productos)
            total = total + 6000
        }
        else if (productos == "campera" ){
            agregarCarrito(productos)
            total = total + 6500
        }
        else if(productos == "pantalon"){
            agregarCarrito(productos)
            total = total + 4000
        }
        else if (productos == "gorrito"){
            agregarCarrito(productos)
            total = total + 1500
        }
    }
    //Suma de productos
    alert(`Su total es $${total} `)

    //Cupon de Descuento
let respuesta = prompt("¿Usted tiene un CUPON DE DESCUENTO? Escriba SI o NO").toLowerCase()
    while (respuesta != "si" && respuesta != "no"){
        respuesta = prompt("Respuesta inválida, por favor, escriba SI o  NO").toLowerCase()
    }

    if (respuesta == "si"){
        cupon = prompt("Ingrese el CODIGO DEL CUPON").toLowerCase()
        console.log(cupon)
        
        while (cupon != "coderhouse" && cupon != "promo"){
            cupon = prompt("Codigo inválido. Ingrese el CODIGO DEL CUPON").toLowerCase()
        }
        if( cupon == "promo"){
            cuponDescuento(total, 0.7)
            alert(`Ha obtenido un 30% de descuento. Su total a pagar es $${totalFinal} `)
        }
        else if(cupon == "coderhouse"){
            cuponDescuento(total, 0.5)
            alert(`Ha obtenido un 50% de descuento. Su total a pagar es $${totalFinal} `)
        }
        else { //Precio final con descuento
            alert(` Su total a pagar es $${total} `)
        }
        }

    alert ('Gracias por su compra, vuelva pronto')