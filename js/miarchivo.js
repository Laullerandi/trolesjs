//SIMULADOR ECOMMERCE

//CUPON DE DESCUENTO 30%: promo
//CUPON DE DESCUENTO 50%: coderhouse


//PROYECTO: Ecommerce "Troles Indumentaria"


//------------------------------ CONSTRUCTOR OBJETO ------------------------------
class Products {
    constructor(sku, articulo, tipo, modelo, color, precio){
        this.sku = sku,
        this.articulo = articulo,
        this.tipo = tipo,
        this.modelo = modelo,
        this.color = color,
        this.precio = precio
    }
}

//---------------------------------- INSTANCIAS -----------------------------------
const producto1 = new Products(10033,"Buzo","Abrigos","Troll centro, troles capucha","Negro", 6000)

const producto2 = new Products(10034,"Buzo","Abrigos","Troll centro, troles bolsillo","Negro", 6000)

const producto3 = new Products(10011,"Buzo","Abrigos","Troll centro, troles manga","Negro", 6000)

const producto4 = new Products(10012,"Campera","Abrigos","Troles frente, troll espalda","Negro", 6500)

const producto5 = new Products(10013,"Pantalon","Pantalones","Troll bolsillo, troles puño","Negro", 5000)

const producto6 = new Products(10051,"Gorrito","Troll frente, troles atras","Run 5","Negro", 1500)

const producto7 = new Products(10052,"Buzo","Abrigos","Troles frente izquierda, troll atras","Negro", 6000)

const producto8 = new Products(10053,"Remera","Remeras","Troles frente izquierda, troll atras","Negro", 3500)

const producto9 = new Products(10054,"Bermuda","Bermudas","Troll frente, troles atras","Negro", 4000)

const producto10 = new Products(10055,"Pantalon","Pantalones","Troll bolsillo","Negro", 5000)

const producto11 = new Products(10077,"Remera","Remeras","Troll centro, troles atras cuello","Negro", 3500)

const producto12 = new Products(10078,"Pantalon","Pantalones","Troles bolsillo","Negro", 5000)


//----------------------------------- ARRAY --------------------------------------
const stock = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12]




//---------------------------------------- FUNCIONES -----------------------------------

//--------------------------- MENÚ PRINCIPAL -----------------------
function menu(){
    let salirMenu = false
    do{
        salirMenu = preguntarOpcion(salirMenu)
    }while(!salirMenu)
} 

function preguntarOpcion(salir){
    let opcionIngresada = parseInt(prompt(`Ingrese la opción deseada
        1 - Comprar
        2 - Ver Catalogo completo de productos
        3 - Filtros
        4 - Ordenar por precios
        0 - Salir del menu`))
    
        switch(opcionIngresada){
            case 1:
                Comprar()
            break
            case 2:
                verCatalogo(stock)
            break
            case 3:
                filtros(stock)
            break
            case 4:
                ordenarPrecios(stock)
            break
            case 0:
                alert("Gracias por su visita, vuelva pronto a Troles Indumentaria")
                salir = true
                return salir
            break
            default:
                alert("Ingrese una opción correcta")
            break
        }
}


//------------------------ CATALOGO COMPLETO -------------------------
function verCatalogo(array){
    console.log("Bienvenido/a a Troles Indumentaria! Nuestro catalogo es:")
    array.forEach((prod)=>{
        console.log(`${prod.articulo} ${prod.tipo}  
        Modelo: ${prod.modelo}
        Color: ${prod.color}
        Precio: $${prod.precio} 
        SKU: ${prod.sku}
        `)
    })
}


//------------------------ FILTRO -------------------------
// Submenu filtros
function filtros(filtro){
    let opcion = parseInt(prompt(`
    1 - Catalogo productos ABRIGOS
    2 - Catalogo productos PANTALONES
    3 - Catalogo productos ACCESORIOS
    4 - Catalogo productos REMERAS
    5 - Catalogo productos BERMUDAS`))
    switch(opcion){
        case 1:
            catalogoAbrigos(filtro)
        break
        case 2:
            catalogoPantalones(filtro)
        break
        case 3:
            catalogoAccesorios(filtro)
        break
        case 4:
            catalogoRemeras(filtro)
        break
        case 5:
            catalogoBermudas(filtro)
        break
        default:
            alert(`${opcion} no es válido`)
        break    
    }
}



//------------------------ CATALOGO ABRIGOS -------------------------
function catalogoAbrigos(arr){
    let abrigos = arr.filter((stock)=> stock.tipo == "Abrigos")
    if(abrigos.length == 0){
        console.log(`ERROR`)
    }else{
        verCatalogo(abrigos)
    }
}


//------------------------ CATALOGO PANTALONES -------------------------
function catalogoPantalones(arr){
    let pantalones = arr.filter((stock)=> stock.tipo == "Pantalones")
    if(pantalones.length == 0){
        console.log(`ERROR`)
    }else{
        verCatalogo(pantalones)
    }
}


//------------------------ CATALOGO ACCESORIOS -------------------------
function catalogoAccesorios(arr){
    let accesorios = arr.filter((stock)=> stock.tipo == "Accesorios")
    if(accesorios.length == 0){
        console.log(`ERROR`)
    }else{
        verCatalogo(accesorios)
    }
}


//------------------------ CATALOGO REMERAS -------------------------
function catalogoRemeras(arr){
    let remeras = arr.filter((stock)=> stock.tipo == "Remeras")
    if(remeras.length == 0){
        console.log(`ERROR`)
    }else{
        verCatalogo(remeras)
    }
}


//------------------------ CATALOGO BERMUDAS -------------------------
function catalogoBermudas(arr){
    let bermudas = arr.filter((stock)=> stock.tipo == "Bermudas")
    if(bermudas.length == 0){
        console.log(`ERROR`)
    }else{
        verCatalogo(bermudas)
    }
}



//------------------------ BUSCAR MARCA -------------------------
function buscarMarca(array){
    let marcaBuscada = prompt("Ingrese la marca que desea buscar")
    let marcaEncontrada = array.filter(
        (brand)=> brand.marca.toLowerCase() == marcaBuscada.toLowerCase()
        )
    if(marcaEncontrada.length == 0){
        alert(`No tenemos stock de la marca ${marcaBuscada}`)
    }else{
        verCatalogo(marcaEncontrada)
    }
}


//----------------------- ORDENAR PRECIOS -------------------------
function MenorMayorPrecio(ar){
    const menorMayor = [].concat(ar) 
    menorMayor.sort((x, y) => {
        return x.precio - y.precio
        })
    verCatalogo(menorMayor)
}


function MayorMenorPrecio(arr){ 
const mayorMenor = [].concat(arr)
mayorMenor.sort((param1, param2) => {
    return param2.precio - param1.precio 
    })
verCatalogo(mayorMenor)
}


//SubMenú Orden de precios
function ordenarPrecios(h){
    let opcion = parseInt(prompt(`
    1 - Ordenar de menor a mayor precio
    2 - Ordenar de mayor a menor precio`))
    switch(opcion){
        case 1:
            MenorMayorPrecio(h)
        break
        case 2:
            MayorMenorPrecio(h)
        break
        default:
            alert(`${opcion} no es válida para ordenar precios`)
        break    
    }
}




//----------------------- COMPRAR -------------------------
function Comprar(){
    total = 0
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

        while (productos != "buzo" && productos != "campera" && productos != "pantalon" && productos != "gorrito" && productos != "remera" && productos != "bermuda" ){
            productos = prompt (`No existe el producto "${productos}". Por favor ingrese el NOMBRE DEL PRODUCTO CORRECTAMENTE`).toLowerCase() //Validacion Producto
        }
        if (productos == "buzo"){
            agregarCarrito(productos)
            total = total + 6
        }
        else if (productos == "campera" ){
            agregarCarrito(productos)
            total = total + 6.5
        }
        else if(productos == "pantalon"){
            agregarCarrito(productos)
            total = total + 5
        }
        else if (productos == "gorrito"){
            agregarCarrito(productos)
            total = total + 1.5
        }
        else if (productos == "remera"){
            agregarCarrito(productos)
            total = total + 3.5
        }
        else if (productos == "bermuda"){
            agregarCarrito(productos)
            total = total + 4
        }
    }
    //Suma de productos
    alert(`Su total es $${total.toFixed(3)} `)

    //Cupon de Descuento
    let respuesta = prompt("¿Usted tiene un CUPON DE DESCUENTO? Escriba SI o NO").toLowerCase()
    while (respuesta != "si" && respuesta != "no"){
        respuesta = prompt("Respuesta inválida, por favor, escriba SI o  NO").toLowerCase()
    }

    if (respuesta == "si"){
        cupon = prompt("Ingrese el CODIGO DEL CUPON").toLowerCase()
        
        while (cupon != "coderhouse" && cupon != "promo"){
            cupon = prompt("Codigo inválido. Ingrese el CODIGO DEL CUPON").toLowerCase()
        }
        if( cupon == "promo"){
            cuponDescuento(total, 0.7)
            alert(`A obtenido un 30% de descuento. Su total a pagar es $${totalFinal.toFixed(3)} `)
        }
        else if(cupon == "coderhouse"){
            cuponDescuento(total, 0.5)
            alert(`A obtenido un 50% de descuento. Su total a pagar es $${totalFinal.toFixed(3)} `)
        }
        else { //Precio final con descuento
            alert(` Su total a pagar es $${total.toFixed(3)} `)
        }
        }

    alert ('Gracias por su compra, vuelva pronto')
    }


function agregarCarrito(){
    alert(`${productos.toUpperCase()} agregado al carrito.`)
}

function cuponDescuento(total, descuento){
    totalFinal = total*descuento
}


// Funcion para ejecutar app:
menu()