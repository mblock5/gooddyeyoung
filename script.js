// SEMI PERMANENT DYES
/* document.addEventListener("DOMContentLoaded", function () {
    let dyeSection = document.getElementById("dyes");

    let exGirlSwatch = document.getElementById("exGirlSwatch");
    let blueRuinSwatch = document.getElementById("blueRuinSwatch");
    let bizSwatch = document.getElementById("bizSwatch");
    let rockLobsterSwatch = document.getElementById("rockLobsterSwatch");
    let kowabungaSwatch = document.getElementById("kowabungaSwatch");
    let riotSwatch = document.getElementById("riotSwatch");
    let stealMySunshineSwatch = document.getElementById("stealMySunshineSwatch");
    let narwhalSwatch = document.getElementById("narwhalSwatch");
    let pplEaterSwatch = document.getElementById("pplEaterSwatch");
    
    function changeSwatch(name, color, description, image, backgroundColor) {

        dyeSection.style.backgroundColor = backgroundColor;
    }
    
    exGirlSwatch.addEventListener("click", function() {
        changeSwatch("Ex-Girl", "Pink", "Bold and neon, our hot pink will make all your exes wish they had you back.", "images/dyes/exGirlModel", "#FF3386")
    });
    
    blueRuinSwatch.addEventListener("click", function() {
        changeSwatch("Blue Ruin", "Blue", "A hue to commit to. Our truest, bluest of blue.", "images/dyes/blueRuinModel", "#031CFF")
    });
    
    bizSwatch.addEventListener("click", function() {
        changeSwatch("Biz", "Orange", "We’re in the BIZness of miser- actually we are in the business of making bad ass hair products. Like this one! Hayley’s signature bold orange shade: BIZ!", "images/dyes/bizModel", "#FF7903")
    });
    
    rockLobsterSwatch.addEventListener("click", function() {
        changeSwatch("Rock Lobster", "Red", "Rock this bright lobster red from the dye bottle to your head!", "images/dyes/rockLobsterModel", "#FF0303")
    });
    
    kowabungaSwatch.addEventListener("click", function() {
        changeSwatch("Kowabunga", "Green", "A classic color for you to be a clean, green, hair-dyeing machine!", "images/dyes/kowabungaModel", "#129100")
    });
    
    riotSwatch.addEventListener("click", function() {
        changeSwatch("Riot", "Orange", "The color that launched it all. Orange you glad you dyed your hair?", "images/dyes/riotModel", "#FF5E00")
    });
    
    stealMySunshineSwatch.addEventListener("click", function() {
        changeSwatch("Steal My Sunshine", "Yellow", "Yellow there! I love your hair! A bright yellow that is sure to make you rise and shine!", "images/dyes/stealMySunshineModel", "#FFFB00")
    });
    
    narwhalSwatch.addEventListener("click", function() {
        changeSwatch("Narwhal", "Teal", "An almost mythical shade of teal that is too good to be blue.", "images/dyes/narwhalModel", "#00D4F7")
    });
    
    pplEaterSwatch.addEventListener("click", function() {
        changeSwatch("PPL Eater", "Purple", "A deep purple with just enough bite to turn heads.", "images/dyes/pplEaterModel", "#7B01DF")
    });
});



*/

// EX-GIRL
document.getElementById("exGirlSwatch").addEventListener("click", function () {
    document.getElementById("dyes").style.background = "linear-gradient(to top, #FF3386, transparent)";
    document.getElementById("dyeName").textContent = "Ex-Girl";
    document.getElementById("dyeColor").textContent = "Pink";
    document.getElementById("dyeDescription").textContent = "Bold and neon, our hot pink will make all your exes wish they had you back.";
    document.getElementById("dyeImages").innerHTML = `<img src="images/dyes/exGirlModel.png" alt="model with dyed hair" height="500">`
    document.getElementById("exGirlSwatch").style.borderWidth = "7px";
    document.getElementById("blueRuinSwatch").style.borderWidth = "4px";
});

// BLUE RUIN
document.getElementById("blueRuinSwatch").addEventListener("click", function () {
    document.getElementById("dyes").style.background = "linear-gradient(to top, #031CFF, transparent)";
    document.getElementById("dyeName").textContent = "Blue Ruin";
    document.getElementById("dyeColor").textContent = "Blue";
    document.getElementById("dyeDescription").textContent = "A hue to commit to. Our truest, bluest of blue.";
    document.getElementById("dyeImages").innerHTML = `<img src="images/dyes/blueRuinModel.png" alt="model with dyed hair" height="500">`
    document.getElementById("blueRuinSwatch").style.borderWidth = "7px";
    document.getElementById("exGirlSwatch").style.borderWidth = "4px";
});

// BIZ

// ROCK LOBSTER

// KOWABUNGA

// RIOT

// STEAL MY SUNSHINE

// NARWHAL

// PPL EATER
