$(document).ready(function () {
    $.getJSON("https://api.myjson.com/bins/udbm5", function (json) {
        data = json;
        console.log(json);
        printBooks();
        searchBar();
        if ("#section:empty") {
            console.log("esta vació")
            var emptyDiv = document.createElement("div");
            $(emptyDiv).text("No Book Found").addClass("empty-div");
        }
    });
});

function printBooks() {
    var books = data.books;
    var section = document.getElementById("section");
    for (let i = 0; i < books.length; i++) {
        var titulo = books[i].titulo;
        var descripcion = books[i].descripcion;
        var detalle = books[i].detalle;
        var portada = books[i].portada;
        var idioma = books[i].idioma;

        var flipContainer = document.createElement("div");
        $(flipContainer).addClass("flip-container " + i ).attr("ontouchstart", "this.classList.toggle('hover');").attr("data-id", i);
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
        $(buttonDetalle).addClass("btn button-book").attr("href", detalle).attr("data-fancybox", "gallery").text("More Info");

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
//Funcion que genera la barra de busqueda, generada por Isotope

// quick search regex
var qsRegex;

function searchBar () {
    
// init Isotope
var $grid = $('.grid').isotope({
    itemSelector: '.flip-container',
    layoutMode: 'fitRows',
    filter: function search() {
        return qsRegex ? $(this).text().match(qsRegex) : true;
    }
});

// use value of search field to filter
    $(document).ready(debounce (function () {
        qsRegex = new RegExp($quicksearch.val(), 'gi');
    $grid.isotope();
    }, 10));
        
var $quicksearch = $('.quicksearch').keyup(debounce(function () {
//    debugger;
    qsRegex = new RegExp($quicksearch.val(), 'gi');
    $grid.isotope();
    console.log("hola");
}, 200));

// debounce so filtering doesn't happen every millisecond
function debounce(fn, threshold) {
    var timeout;
    return function debounced() {
        if (timeout) {
            clearTimeout(timeout);
        }

        function delayed() {
            fn();
            timeout = null;
        }
        timeout = setTimeout(delayed, threshold || 100);
    }
}
}

