

$('#addBtn').click(function () {
    if ($('#input').val()) { //make sure the user entered something---győződjön meg arról, hogy a felhasználó beírt valamit
        $("ul").append(`<li> ${$('#input').val()}</li>`);
    }

    else {
        alert('üres a bevitelimező')
    }
});



