$('#addBtn').click(function () {
    if ($('#input').val()) {
        $("ul").append(`<li>${$('#input').val()}
        <button id="check" onclick="checke(this);"><i class="check fas fa-check-circle"></i></i></button>
        <button id="det" onclick="dete(this);"><i class="trash fas fa-trash"></i></button>
        </li>`);
        $("input").val(""); //gomb nyomás után az input mező előzző szövege törlődik
    }

    else {
        alert('empty input!')
    }
});

/* pipa oda vissza kapcsolása:         */
function checke(e) {

    if($(e.parentElement).css('color') == 'rgb(42, 195, 255)') {/* lista szöveg    rgb(42, 195, 255);         */

        $(e.parentElement).addClass("UlGrey"); // UlGrey rgb(215, 215, 216)
        $(e.children).addClass("CheckGreen");  // CHechkGreen  rgb(81, 190, 17)
    }

    else if($(e.parentElement).css('color') == 'rgb(215, 215, 216)' &&  $(e.children).css('color') == 'rgb(81, 190, 17)') {

        $(e.parentElement).removeClass("UlGrey");
        $(e.children).removeClass("CheckGreen");

        $(e.parentElement).addClass("UlBlue"); //  UlBlue rgb(42, 195, 255)
        $(e.children).addClass("CheckGrey");  //   CheckGrey rgb(163, 163, 163)
    }



}

/*Törlés*/
function dete(e) {
    e.parentElement.remove();
}



