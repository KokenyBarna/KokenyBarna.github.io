
// köszönés

$('#button1').click(function () {
    if ($('#Name').val()) { //make sure the user entered something---győződjön meg arról, hogy a felhasználó beírt valamit
        $('body').append(`<h1>Hello ${$('#Name').val()}!</h1>`);
    }
    else {
        alert('üres a bevitelimező')
    }
});

/*
$('#button1').click(function () {
    let getName = $('input#Name').val();
    $('body').append('<h1></h1>')
    $("h1").text('Hello '+getName)//+ my name
  
  });
 
*/


//Gomb (id = button2) színének megváltoztatása input alapértelmezett érték megadásával
$('#button2').click(function () {
    let getColor = $('input#ButtonBgColor').val();
    $('#button2').css('background-color', getColor)

});



//Kiírás
$('#button3').click(function () {
    $('body').append('<h1>Igen, most rámkattintottál</h1>')

});

//Gomb szövegének megváltoztatása
$('#button4').click(function () {
    $('#button3').html('változás')

});

//összes gomb színének megváltoztatása
$('#button5').click(function () {
    $('button').css('background-color', 'orange')

});