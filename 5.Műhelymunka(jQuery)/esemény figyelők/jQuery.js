

// köszönés
$('#button').click(function () {
    if ($('#Name').val()) { //make sure the user entered something---győződjön meg arról, hogy a felhasználó beírt valamit
      $('body').append(`<h1>Hello ${$('#Name').val()}!</h1>`);
    }
    else{
      alert('üres a bevitelimező')
    }
  });


/*
ez is jó de nem ellenörzi hogy be van e írva valami
$('#button1').click(function () {
  let getName = $('input#Name').val();
  $('body').append('<h1></h1>')
  $("h1").text('Hello '+getName)//+ my name

});

*/