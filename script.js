"use strict";

// LIGHT MODE

document.getElementById("lightMode").addEventListener("click", function() {

    // background and text
    document.querySelector("body").style.backgroundColor = "#FFFFFF";
    document.querySelector("body").style.color = "#000000";

    // background of #homeSection2
    document.getElementById("homeSection2").style.backgroundColor = "#0FB8BB";

});

// DARK MODE

document.getElementById("darkMode").addEventListener("click", function() {

    // background and text
    document.querySelector("body").style.backgroundColor = "#1A1A1A";
    document.querySelector("body").style.color = "#FFFFFF";

    // background of #homeSection2
    document.getElementById("homeSection2").style.backgroundColor = "#36006E";


    // borders of swatches
    let dyeSwatches = document.getElementsByClassName("dyeSwatch")
    for(let i = 0; i < dyeSwatches.length; i++) {
        dyeSwatches[i].style.borderColor = "#000000";
    }

    // borders in #contact
    
    document.getElementById("contactMethod").style.borderColor = "#FFFFFF";
    document.getElementById("contest").style.borderColor = "#FFFFFF";

    // input in #contact
    let input = document.querySelectorAll("input");
    for ( let i = 0; i < input.length; i++) {
        input[i].style.backgroundColor = "#CDCDCD";
    }


});

// SEMI-PERMANENT DYES SECTION


// EX-GIRL

document.getElementById("exGirlSwatch").addEventListener("click", function () {

    // background
    document.getElementById("dyes").style.background = "linear-gradient(to top, #FF3386, transparent)";

    // name
    document.getElementById("dyeName").textContent = "Ex-Girl";

    // color
    document.getElementById("dyeColor").textContent = "Pink";

    // description
    document.getElementById("dyeDescription").textContent = "Bold and neon, our hot pink will make all your exes wish they had you back.";

    // image
    document.getElementById("dyeImage").innerHTML = `<img src="images/dyes/exGirlProduct.png" alt="ex-girl hair dye packaging" height="500">`;

    // reset border-width of other swatches
    document.getElementById("exGirlSwatch").style.borderWidth = "6px";
    document.getElementById("blueRuinSwatch").style.borderWidth = "4px";
    document.getElementById("bizSwatch").style.borderWidth = "4px";
    document.getElementById("rockLobsterSwatch").style.borderWidth = "4px";
    document.getElementById("kowabungaSwatch").style.borderWidth = "4px";
    document.getElementById("riotSwatch").style.borderWidth = "4px";
    document.getElementById("stealMySunshineSwatch").style.borderWidth = "4px";
    document.getElementById("pplEaterSwatch").style.borderWidth = "4px";
    document.getElementById("narwhalSwatch").style.borderWidth = "4px";
});

// BLUE RUIN
document.getElementById("blueRuinSwatch").addEventListener("click", function () {

    // background
    document.getElementById("dyes").style.background = "linear-gradient(to top, #031CFF, transparent)";

    // name
    document.getElementById("dyeName").textContent = "Blue Ruin";

    // color
    document.getElementById("dyeColor").textContent = "Blue";

    // description
    document.getElementById("dyeDescription").textContent = "A hue to commit to. Our truest, bluest of blue.";

    // image
    document.getElementById("dyeImage").innerHTML = `<img src="images/dyes/blueRuinProduct.png" alt="model with blue-dyed hair" height="500">`

    // reset border-width of other swatches
    document.getElementById("blueRuinSwatch").style.borderWidth = "6px";
    document.getElementById("exGirlSwatch").style.borderWidth = "4px";
    document.getElementById("bizSwatch").style.borderWidth = "4px";
    document.getElementById("rockLobsterSwatch").style.borderWidth = "4px";
    document.getElementById("kowabungaSwatch").style.borderWidth = "4px";
    document.getElementById("riotSwatch").style.borderWidth = "4px";
    document.getElementById("stealMySunshineSwatch").style.borderWidth = "4px";
    document.getElementById("pplEaterSwatch").style.borderWidth = "4px";
    document.getElementById("narwhalSwatch").style.borderWidth = "4px";
});

// BIZ

document.getElementById("bizSwatch").addEventListener("click", function () {

    // background
    document.getElementById("dyes").style.background = "linear-gradient(to top, #FF7903, transparent)";

    // name
    document.getElementById("dyeName").textContent = "Biz";

    // color
    document.getElementById("dyeColor").textContent = "Orange";

    // description
    document.getElementById("dyeDescription").textContent = "We’re in the BIZness of miser- actually we are in the business of making bad ass hair products. Like this one! Hayley’s signature bold orange shade: BIZ!";

    // image
    document.getElementById("dyeImage").innerHTML = `<img src="images/dyes/bizProduct.png" alt="model with orange-dyed hair" height="500">`

    // reset border-width of other swatches
    document.getElementById("bizSwatch").style.borderWidth = "6px";
    document.getElementById("blueRuinSwatch").style.borderWidth = "4px";
    document.getElementById("exGirlSwatch").style.borderWidth = "4px";
    document.getElementById("rockLobsterSwatch").style.borderWidth = "4px";
    document.getElementById("kowabungaSwatch").style.borderWidth = "4px";
    document.getElementById("riotSwatch").style.borderWidth = "4px";
    document.getElementById("stealMySunshineSwatch").style.borderWidth = "4px";
    document.getElementById("pplEaterSwatch").style.borderWidth = "4px";
    document.getElementById("narwhalSwatch").style.borderWidth = "4px";
});

// ROCK LOBSTER

document.getElementById("rockLobsterSwatch").addEventListener("click", function () {

    // background
    document.getElementById("dyes").style.background = "linear-gradient(to top, #FF0303, transparent)";

    // name
    document.getElementById("dyeName").textContent = "Rock Lobster";

    // color
    document.getElementById("dyeColor").textContent = "Red";

    // description
    document.getElementById("dyeDescription").textContent = "Rock this bright lobster red from the dye bottle to your head!";

    // image
    document.getElementById("dyeImage").innerHTML = `<img src="images/dyes/rockLobsterProduct.png" alt="model with red-dyed hair" height="500">`

    // reset border-width of other swatches
    document.getElementById("rockLobsterSwatch").style.borderWidth = "6px";
    document.getElementById("bizSwatch").style.borderWidth = "4px";
    document.getElementById("blueRuinSwatch").style.borderWidth = "4px";
    document.getElementById("exGirlSwatch").style.borderWidth = "4px";
    document.getElementById("kowabungaSwatch").style.borderWidth = "4px";
    document.getElementById("riotSwatch").style.borderWidth = "4px";
    document.getElementById("stealMySunshineSwatch").style.borderWidth = "4px";
    document.getElementById("pplEaterSwatch").style.borderWidth = "4px";
    document.getElementById("narwhalSwatch").style.borderWidth = "4px";
});

// KOWABUNGA

document.getElementById("kowabungaSwatch").addEventListener("click", function () {

    // background
    document.getElementById("dyes").style.background = "linear-gradient(to top, #129100, transparent)";

    // name
    document.getElementById("dyeName").textContent = "Kowabunga";

    // color
    document.getElementById("dyeColor").textContent = "Green";

    // description
    document.getElementById("dyeDescription").textContent = "A classic color for you to be a clean, green, hair-dyeing machine!";

    // image
    document.getElementById("dyeImage").innerHTML = `<img src="images/dyes/kowabungaProduct.png" alt="model with green-dyed hair" height="500">`

    // reset border-width of other swatches
    document.getElementById("kowabungaSwatch").style.borderWidth = "6px";
    document.getElementById("rockLobsterSwatch").style.borderWidth = "4px";
    document.getElementById("bizSwatch").style.borderWidth = "4px";
    document.getElementById("blueRuinSwatch").style.borderWidth = "4px";
    document.getElementById("exGirlSwatch").style.borderWidth = "4px";
    document.getElementById("riotSwatch").style.borderWidth = "4px";
    document.getElementById("stealMySunshineSwatch").style.borderWidth = "4px";
    document.getElementById("pplEaterSwatch").style.borderWidth = "4px";
    document.getElementById("narwhalSwatch").style.borderWidth = "4px";
});

// RIOT

document.getElementById("riotSwatch").addEventListener("click", function () {

    // background
    document.getElementById("dyes").style.background = "linear-gradient(to top, #FF5E00, transparent)";

    // name
    document.getElementById("dyeName").textContent = "Riot";

    // color
    document.getElementById("dyeColor").textContent = "Orange";

    // description
    document.getElementById("dyeDescription").textContent = "The color that launched it all. Orange you glad you dyed your hair?";

    // image
    document.getElementById("dyeImage").innerHTML = `<img src="images/dyes/riotProduct.png" alt="model with orange-dyed hair" height="500">`

    // reset border-width of other swatches
    document.getElementById("riotSwatch").style.borderWidth = "6px";
    document.getElementById("kowabungaSwatch").style.borderWidth = "4px";
    document.getElementById("rockLobsterSwatch").style.borderWidth = "4px";
    document.getElementById("bizSwatch").style.borderWidth = "4px";
    document.getElementById("blueRuinSwatch").style.borderWidth = "4px";
    document.getElementById("exGirlSwatch").style.borderWidth = "4px";
    document.getElementById("stealMySunshineSwatch").style.borderWidth = "4px";
    document.getElementById("pplEaterSwatch").style.borderWidth = "4px";
    document.getElementById("narwhalSwatch").style.borderWidth = "4px";
});

// STEAL MY SUNSHINE

document.getElementById("stealMySunshineSwatch").addEventListener("click", function () {

    // background
    document.getElementById("dyes").style.background = "linear-gradient(to top, #FFFB00, transparent)";

    // name
    document.getElementById("dyeName").textContent = "Steal My Sunshine";

    // color
    document.getElementById("dyeColor").textContent = "Yellow";

    // description
    document.getElementById("dyeDescription").textContent = "Yellow there! I love your hair! A bright yellow that is sure to make you rise and shine!";

    // image
    document.getElementById("dyeImage").innerHTML = `<img src="images/dyes/stealMySunshineProduct.png" alt="model with yellow-dyed hair" height="500">`

    // reset border-width of other swatches
    document.getElementById("stealMySunshineSwatch").style.borderWidth = "6px";
    document.getElementById("riotSwatch").style.borderWidth = "4px";
    document.getElementById("kowabungaSwatch").style.borderWidth = "4px";
    document.getElementById("rockLobsterSwatch").style.borderWidth = "4px";
    document.getElementById("bizSwatch").style.borderWidth = "4px";
    document.getElementById("blueRuinSwatch").style.borderWidth = "4px";
    document.getElementById("exGirlSwatch").style.borderWidth = "4px";
    document.getElementById("pplEaterSwatch").style.borderWidth = "4px";
    document.getElementById("narwhalSwatch").style.borderWidth = "4px";
});

// NARWHAL

document.getElementById("narwhalSwatch").addEventListener("click", function () {

    // background
    document.getElementById("dyes").style.background = "linear-gradient(to top, #00D4F7, transparent)";

    // name
    document.getElementById("dyeName").textContent = "Narwhal";

    // color
    document.getElementById("dyeColor").textContent = "Teal";

    // description
    document.getElementById("dyeDescription").textContent = "An almost mythical shade of teal that is too good to be blue.";

    // image
    document.getElementById("dyeImage").innerHTML = `<img src="images/dyes/narwhalProduct.png" alt="model with teal-dyed hair" height="500">`

    // reset border-width of other swatches
    document.getElementById("narwhalSwatch").style.borderWidth = "6px";
    document.getElementById("stealMySunshineSwatch").style.borderWidth = "4px";
    document.getElementById("riotSwatch").style.borderWidth = "4px";
    document.getElementById("kowabungaSwatch").style.borderWidth = "4px";
    document.getElementById("rockLobsterSwatch").style.borderWidth = "4px";
    document.getElementById("bizSwatch").style.borderWidth = "4px";
    document.getElementById("blueRuinSwatch").style.borderWidth = "4px";
    document.getElementById("exGirlSwatch").style.borderWidth = "4px";
    document.getElementById("pplEaterSwatch").style.borderWidth = "4px";
    
});

// PPL EATER

document.getElementById("pplEaterSwatch").addEventListener("click", function () {

    // background
    document.getElementById("dyes").style.background = "linear-gradient(to top, #7B01DF, transparent)";

    // name
    document.getElementById("dyeName").textContent = "PPL Eater";

    // color
    document.getElementById("dyeColor").textContent = "Purple";

    // description
    document.getElementById("dyeDescription").textContent = "A deep purple with just enough bite to turn heads.";

    // image
    document.getElementById("dyeImage").innerHTML = `<img src="images/dyes/pplEaterProduct.png" alt="model with purple-dyed hair" height="500">`

    // reset border-width of other swatches
    document.getElementById("pplEaterSwatch").style.borderWidth = "6px";
    document.getElementById("narwhalSwatch").style.borderWidth = "4px";
    document.getElementById("stealMySunshineSwatch").style.borderWidth = "4px";
    document.getElementById("riotSwatch").style.borderWidth = "4px";
    document.getElementById("kowabungaSwatch").style.borderWidth = "4px";
    document.getElementById("rockLobsterSwatch").style.borderWidth = "4px";
    document.getElementById("bizSwatch").style.borderWidth = "4px";
    document.getElementById("blueRuinSwatch").style.borderWidth = "4px";
    document.getElementById("exGirlSwatch").style.borderWidth = "4px";
});
