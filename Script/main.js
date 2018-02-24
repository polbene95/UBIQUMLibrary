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
        
        var pTitulo = document.createElement("p");
        $(pTitulo).text(titulo);
        var pDescripcion = document.createElement("p");
        $(pDescripcion).addClass("description-book").text(descripcion);
        var buttonDetalle = document.createElement("button");
        $(buttonDetalle).addClass("btn button-book").attr("href", detalle).text("More Info");
        
        var titleDiv = document.createElement("div");
        $(titleDiv).addClass("title-book")
        var descriptionDiv = document.createElement("div");
        $(descriptionDiv).addClass("more-info-book");
        
        titleDiv.append(pTitulo);
        descriptionDiv.append(pDescripcion);
        descriptionDiv.append(buttonDetalle);
        
        front.append(imgPortada);
        
        back.append(titleDiv);
        back.append(descriptionDiv);
        
        flipper.append(front);
        flipper.append(back);
        flipContainer.append(flipper);
        section.append(flipContainer);
    }
}

    