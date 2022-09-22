function sumarUno(numero, callback){

    setTimeout(function(){

    },800);

    //return numero  + 1 ;
    callback(numero + 1);
}

sumarUno(5, function(nuevoValor){
    console.log(nuevoValor)
});
