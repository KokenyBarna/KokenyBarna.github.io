
// növelés
let count = 0;
$("#btPlus").click(function() {
    count++;
    $("#szamlalo").html(count);
});


// csökkentés
$("#btMinus").click(function() {
    count--;
    $("#szamlalo").html(count);
});