
// köszönés

$('#button1').click(function () {
  if ($('#Name').val()) { //make sure the user entered something---győződjön meg arról, hogy a felhasználó beírt valamit
    $('body').append(`<h1>Hello ${$('#Name').val()}!</h1>`);
  }
  else{
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

//Kiírás
$('#button2').click(function () {
    $('body').append('<h1>Igen, most rámkattintottál</h1>')
  
  });

//Gomb szövegének megváltoztatása
$('#button3').click(function () {
    $('#button2').html('változás')
  
  });
  
//Gomb színének megváltoztatása
$('#button4').click(function () {
    $('button').css('background-color','orange')
  
  });