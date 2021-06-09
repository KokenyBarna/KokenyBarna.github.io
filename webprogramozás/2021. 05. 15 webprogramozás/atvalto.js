function Ftoc()
{
    var far = parseFloat(document.form1.FARENHEIT.value);
    var cels = (far - 32)/1.8;
    document.getElementById('cels').value=cels.toFixed(2);
    //document.write(cels)

}

