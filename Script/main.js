$(document).ready(function () {
   $.getJSON("https://api.myjson.com/bins/udbm5", function (json) {
       data = json;
       console.log(json);
       printBooks ()
       
   }); 
});
function printBooks (){
    var books = data.books;
    var section = document.getElementById("section");
    for (let i = 0; i < books.length; i++) {
        var titulo = books[i].titulo;
        var descripcion = books[i].descripcion;
        var detalle = books[i].detalle;
        var portada = books[i].portada;
        var idioma = books[i].idioma;
        
        var flipContainer = document.createElement("div");
        $(flipContainer).addClass("flip-container").attr("ontouchstart", "this.classList.toggle('hover');");
        var flipper = document.createElement("div");
        $(flipper).addClass("flipper");
        var front = document.createElement("div");
        $(front).addClass("front");
        var back = document.createElement("div");
        $(back).addClass("back");
        
        var imgPortada = document.createElement("img");
        $(imgPortada).attr("src", portada).attr("alt", "portada del libro" + titulo).addClass("image-portada");
        
        front.append(imgPortada);
        
        
        flipper.append(front);
        flipper.append(back);
        flipContainer.append(flipper);
        section.append(flipContainer);
    }
}

    