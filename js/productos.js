class Producto{
    foto;
    titulo;
    detalle;
    precioA;
    precioF;
    descuento;
    cantidad;
    vista;

    constructor(foto,titulo,detalle,precioA,precioF,cantidad){
    this.foto=foto;
    this.titulo=titulo;
    this.detalle=detalle;
    this.precioA=precioA;
    this.precioF=precioF;
    this.cantidad=cantidad;
    this.descuento=((1-(precioF/precioA))*100).toFixed(2)
    this.vista=true;

    }

    //NO METER NADA DE CSS CAUSA CONFLICTO SI QUIERES QUE TU CODIGO SEA REUTILIZABLE

    comprar(){
        if(this.cantidad<1){
            this.vista=false;
        }else{
            this.cantidad--
        }        
    }


}