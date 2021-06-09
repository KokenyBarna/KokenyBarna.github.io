
// clock function

function clock(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var second = date.getSeconds();
    var midday;

    hours = updateTime(hours);
    minutes = updateTime(minutes);
    second = updateTime(second);
    var name = "Barnabás";

    midday = (hours >= 12) ? "PM" : "AM";
    document.getElementById("clock").innerHTML = "<span>"+hours+"</span>" + "<div class=kettospont> : </div>"  + "<span>"+minutes+"</span>" + "<div class=kettospont> : </div>" + "<span id=second>"+second+"</span>" + "<span>"+midday+"</span>";

    var time = setTimeout(function(){
        clock();
    },1000);

    // köszönések
    if(hours < 12){
        var greeting = "Good Morning " + name + "!";
    }

    if(hours >= 12 && hours <=18){
        var greeting = "Good Afternoon " + name + "!";
    }

    if(hours >= 18 && hours <=24){
        var greeting = "Good Evening " + name + "!";
    }

    document.getElementById("greeting").innerHTML = greeting;

}
// end of clock function

// updateTime function:

function updateTime(k){
    if(k < 10){
        return "0" + k
    }
    else{
        return k;
    }
}

// end of updateTime function

// call clock function
clock();
