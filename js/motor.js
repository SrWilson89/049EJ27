var p1 = new Producto("img/ico8.jpg", "Cinesa", "textolargo", 9.10, 4.95, 120)

misProductos = new Array();

micesta = new Array();

miArray= new Array();

misProductos.push(new Producto(
    "img/ico8.jpg", 
    "Cinesa Talavera de la Reina", 
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", 
    9.00, 
    2.00, 
    20));

misProductos.push(new Producto(
    "img/ico9.jpg", 
    "Cinesa Toledo", 
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", 
    9.00, 
    3.50, 
    10));
    
pintar();

function pintar(miArray) {
    if (miArray==null){
        miArray=misProductos;
    }    

    document.getElementById('detalle').innerHTML = "";

    for (var x = 0; x < miArray.length; x++) {

        document.getElementById('detalle').innerHTML += `
            <div class="producto">
                <img src="${miArray[x].foto}" alt="">
                <div class="titulo"><p>${miArray[x].titulo}</p></div>
                <div class="preciA">${miArray[x].precioA} €</div>
                <div class="precioF">${miArray[x].precioF} €</div>
                <div class="descuento">${miArray[x].descuento} % descuento</div>
                <div class="cantidad">Plazas: ${miArray[x].cantidad}</div>
                <div class="descripcion"><p>${miArray[x].detalle}</p></div>
                ${mostrarBoton(miArray, x)}
                <p onclick="cerrar(${x})" class="cerrar"><i class="fas fa-window-close"></i></p>
            </div>
        `
    }
}

function cesta(posicion){
    misProductos[posicion].comprar();
    micesta.push(miArray[posicion]);
    pintar();
}

function mostrarBoton(array, posicion){
if (array[posicion].vista){
return `<button onclick="cesta(${posicion})">Añadir al carrito <i class="fas fa-ticket-alt"></i></button>
                <button onclick="">Favoritos <i class="fas fa-heart"></i></button>`;
}else{
return `<button onclick="cesta(${posicion})" disabled >Añadir al carrito <i class="fas fa-ticket-alt"></i></button>
                <button onclick="">Favoritos <i class="fas fa-heart"></i></button>`;}
}

function filtra(){
    var valor = document.getElementById('filtro').value;
    miFiltro=misProductos.filter(item => item.titulo.includes(valor));
    if(miFiltro===0){
        pintar();
    }else{
        pintar(miFiltro);
    }
}

function add(){
    foto=prompt("Ruta de la foto");
    titulo=prompt("Inserte el titulo");
    detalle=prompt("Inserte el detalle");
    precioA=prompt("Inserte el precio inicial");
    precioF=prompt("Inserte el precio con descuento");
    cantidad=prompt("Cantidad de tikets");

    misProductos.push(new Producto(
        foto, 
        titulo, 
        detalle, 
        precioA, 
        precioF, 
        cantidad));

    pintar();

    localStorage.setItem('MysTikets',JSON.stringify(misProductos));
}

function cargaDatos(){
    if (localStorage.getItem('MysTikets')){
        misProductos=JSON.parse(localStorage.getItem('MysTikets'));
        
        pintar();
    }
}

cargaDatos();

function cerrar(posicion){
    misProductos.splice(posicion,1);
    localStorage.setItem('MysTikets',JSON.stringify(misProductos));
    pintar();
}
