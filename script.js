"use strict";

// // // // // // // LIGHT MODE // // // // // // // 

document.getElementById("lightMode").addEventListener("click", function() {

    // background and text
    document.querySelector("body").style.backgroundColor = "#FFFFFF";
    document.querySelector("body").style.color = "#000000";

    // background of #homeSection2
    document.getElementById("homeSection2").style.backgroundColor = "#0FB8BB";

    // borders of swatches
    let dyeSwatches = document.getElementsByClassName("dyeSwatch")
    for(let i = 0; i < dyeSwatches.length; i++) {
        dyeSwatches[i].style.borderColor = "#FFFFFF";
    }

    // borders in #contact
    document.getElementById("contactMethod").style.borderColor = "#000000";
    document.getElementById("contest").style.borderColor = "#000000";
    document.getElementById("contactMethod").style.borderStyle = "solid";
    document.getElementById("contest").style.borderborderStyle = "solid";

    // input in #contact
    let input = document.querySelectorAll("input");
    for ( let i = 0; i < input.length; i++) {
        input[i].style.backgroundColor = "#FFFFFF";
        input[i].style.borderStyle = "solid";
        input[i].style.borderWidth = "1px";
    }
});

// // // // // // // DARK MODE // // // // // // // 

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
    document.getElementById("contactMethod").style.borderWeight = "1px";
    document.getElementById("contest").style.borderWeight = "1px";

    // input in #contact
    let input = document.querySelectorAll("input");
    for ( let i = 0; i < input.length; i++) {
        input[i].style.backgroundColor = "#CDCDCD";
        input[i].style.borderStyle = "solid";
        input[i].style.borderWidth = "1px";
    }
});


// // // // // // // SEMI-PERMANENT DYES SECTION // // // // // // // 

// EX-GIRL
document.getElementById("exGirlSwatch").addEventListener("click", function () {

    // background gradient
    document.getElementById("dyes").style.background = "linear-gradient(to top, #FF3386, transparent)";

    // name
    document.getElementById("dyeName").textContent = "Ex-Girl";

    // color
    document.getElementById("dyeColor").textContent = "Pink";

    // description
    document.getElementById("dyeDescription").textContent = "Bold and neon, our hot pink will make all your exes wish they had you back.";

    // images - change the src and alt
    document.getElementById("dyeImage1").setAttribute("src", "images/dyes/exGirlModel.png");
    document.getElementById("dyeImage1").setAttribute("alt", "model with pink hair");
    document.getElementById("dyeImage2").setAttribute("src", "images/dyes/exGirlProduct.png");
    document.getElementById("dyeImage2").setAttribute("alt", "ex-girl hair dye packaging");

    // change border of active swatch + reset border-width of other swatches
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

    // background gradient
    document.getElementById("dyes").style.background = "linear-gradient(to top, #031CFF, transparent)";

    // name
    document.getElementById("dyeName").textContent = "Blue Ruin";

    // color
    document.getElementById("dyeColor").textContent = "Blue";

    // description
    document.getElementById("dyeDescription").textContent = "A hue to commit to. Our truest, bluest of blue.";

    // images - change the src and alt
    document.getElementById("dyeImage1").setAttribute("src", "images/dyes/blueRuinModel.png");
    document.getElementById("dyeImage1").setAttribute("alt", "model with blue hair");
    document.getElementById("dyeImage2").setAttribute("src", "images/dyes/blueRuinProduct.png");
    document.getElementById("dyeImage2").setAttribute("alt", "blue ruin hair dye packaging");


    // change border of active swatch + reset border-width of other swatches
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

    // background gradient
    document.getElementById("dyes").style.background = "linear-gradient(to top, #FF7903, transparent)";

    // name
    document.getElementById("dyeName").textContent = "Biz";

    // color
    document.getElementById("dyeColor").textContent = "Orange";

    // description
    document.getElementById("dyeDescription").textContent = "We’re in the BIZness of miser- actually we are in the business of making bad ass hair products. Like this one! Hayley’s signature bold orange shade: BIZ!";

    // images - change the src and alt
    document.getElementById("dyeImage1").setAttribute("src", "images/dyes/bizModel.png");
    document.getElementById("dyeImage1").setAttribute("alt", "model with orange hair");
    document.getElementById("dyeImage2").setAttribute("src", "images/dyes/bizProduct.png");
    document.getElementById("dyeImage2").setAttribute("alt", "biz hair dye packaging");

    // change border of active swatch + reset border-width of other swatches
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

    // background gradient
    document.getElementById("dyes").style.background = "linear-gradient(to top, #FF0303, transparent)";

    // name
    document.getElementById("dyeName").textContent = "Rock Lobster";

    // color
    document.getElementById("dyeColor").textContent = "Red";

    // description
    document.getElementById("dyeDescription").textContent = "Rock this bright lobster red from the dye bottle to your head!";

     // images - change the src and alt
     document.getElementById("dyeImage1").setAttribute("src", "images/dyes/rockLobsterModel.png");
     document.getElementById("dyeImage1").setAttribute("alt", "model with red hair");
     document.getElementById("dyeImage2").setAttribute("src", "images/dyes/rockLobsterProduct.png");
     document.getElementById("dyeImage2").setAttribute("alt", "rock lobster hair dye packaging");

    // change border of active swatch + reset border-width of other swatches
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

    // background gradient
    document.getElementById("dyes").style.background = "linear-gradient(to top, #129100, transparent)";

    // name
    document.getElementById("dyeName").textContent = "Kowabunga";

    // color
    document.getElementById("dyeColor").textContent = "Green";

    // description
    document.getElementById("dyeDescription").textContent = "A classic color for you to be a clean, green, hair-dyeing machine!";

    // images - change the src and alt
    document.getElementById("dyeImage1").setAttribute("src", "images/dyes/kowabungaModel.png");
    document.getElementById("dyeImage1").setAttribute("alt", "model with green hair");
    document.getElementById("dyeImage2").setAttribute("src", "images/dyes/kowabungaProduct.png");
    document.getElementById("dyeImage2").setAttribute("alt", "kowabunga hair dye packaging");

    // change border of active swatch + reset border-width of other swatches
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

    // background gradient
    document.getElementById("dyes").style.background = "linear-gradient(to top, #FF5E00, transparent)";

    // name
    document.getElementById("dyeName").textContent = "Riot";

    // color
    document.getElementById("dyeColor").textContent = "Orange";

    // description
    document.getElementById("dyeDescription").textContent = "The color that launched it all. Orange you glad you dyed your hair?";

    // images - change the src and alt
    document.getElementById("dyeImage1").setAttribute("src", "images/dyes/riotModel.png");
    document.getElementById("dyeImage1").setAttribute("alt", "model with orange hair");
    document.getElementById("dyeImage2").setAttribute("src", "images/dyes/riotProduct.png");
    document.getElementById("dyeImage2").setAttribute("alt", "riot hair dye packaging");

    // change border of active swatch + reset border-width of other swatches
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

    // background gradient
    document.getElementById("dyes").style.background = "linear-gradient(to top, #FFFB00, transparent)";

    // name
    document.getElementById("dyeName").textContent = "Steal My Sunshine";

    // color
    document.getElementById("dyeColor").textContent = "Yellow";

    // description
    document.getElementById("dyeDescription").textContent = "Yellow there! I love your hair! A bright yellow that is sure to make you rise and shine!";

    // images - change the src and alt
    document.getElementById("dyeImage1").setAttribute("src", "images/dyes/stealMySunshineModel.png");
    document.getElementById("dyeImage1").setAttribute("alt", "model with yellow hair");
    document.getElementById("dyeImage2").setAttribute("src", "images/dyes/stealMySunshineProduct.png");
    document.getElementById("dyeImage2").setAttribute("alt", "stealMySunshine hair dye packaging");

    // change border of active swatch + reset border-width of other swatches
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

    // background gradient
    document.getElementById("dyes").style.background = "linear-gradient(to top, #00D4F7, transparent)";

    // name
    document.getElementById("dyeName").textContent = "Narwhal";

    // color
    document.getElementById("dyeColor").textContent = "Teal";

    // description
    document.getElementById("dyeDescription").textContent = "An almost mythical shade of teal that is too good to be blue.";

    // images - change the src and alt
    document.getElementById("dyeImage1").setAttribute("src", "images/dyes/narwhalModel.png");
    document.getElementById("dyeImage1").setAttribute("alt", "model with teal hair");
    document.getElementById("dyeImage2").setAttribute("src", "images/dyes/narwhalProduct.png");
    document.getElementById("dyeImage2").setAttribute("alt", "narwhal hair dye packaging");

    // change border of active swatch + reset border-width of other swatches
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

    // background gradient
    document.getElementById("dyes").style.background = "linear-gradient(to top, #7B01DF, transparent)";

    // name
    document.getElementById("dyeName").textContent = "PPL Eater";

    // color
    document.getElementById("dyeColor").textContent = "Purple";

    // description
    document.getElementById("dyeDescription").textContent = "A deep purple with just enough bite to turn heads.";

    // images - change the src and alt
    document.getElementById("dyeImage1").setAttribute("src", "images/dyes/pplEaterModel.png");
    document.getElementById("dyeImage1").setAttribute("alt", "model with purple hair");
    document.getElementById("dyeImage2").setAttribute("src", "images/dyes/pplEaterProduct.png");
    document.getElementById("dyeImage2").setAttribute("alt", "pplEater hair dye packaging");

    // change border of active swatch + reset border-width of other swatches
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







// CONTACT FORM

// validate form
function validateForm(event) {

    // prevent default submission
    event.preventDefault();

    // remove existing error messages
    let errorSpans = document.getElementsByClassName("errorMessage");
    for( let i = 0; i < errorSpans.length; i++) {
        errorSpans[i].textContent = "";
    }

    // grab user input from form
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let phoneNum = document.getElementById("phoneNum").value;
  let email = document.getElementById("email").value;
  let contactMethod = document.querySelector("input[name='prefContact']:checked").value;
  let comments = document.getElementById("comments").value;

    // regexs
    let nameRegex = /^[a-zA-Z]+$/;
    let phoneRegex = /^\d{10}$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // flag validity
    let isValid = true;

    // validate first name
    if(firstName === "") {
        displayErrorMessage("firstName", "First name is required.");
        isValid = false;
    } else if (!nameRegex.test(firstName)) {
        displayErrorMessage("firstName", "First name should only contain letters.");
        isValid = false;
    }

    // validate last name
    if(lastName === "") {
        displayErrorMessage("lastName", "Last name is required.");
        isValid = false;
    } else if (!nameRegex.test(lastName)) {
        displayErrorMessage("lastName", "Last name should only contain letters.");
        isValid = false;
    }

    // validate phone number OR email based on preferred contact method selection

    if(contactMethod === "phone") {
        if(phoneNum === "") {
            displayErrorMessage("phoneNum", "Phone number is required.");
            isValid = false;
        } else if (!phoneRegex.test(phoneNum)) {
            displayErrorMessage("phoneNum", "Please enter a valid phone number with 10 digits.");
            isValid = false;
        }
    } else if(contactMethod === "email") {
        if(email === "") {
            displayErrorMessage("email", "Email is required.");
            isValid = false;
        } else if (!emailRegex.test(email)) {
            displayErrorMessage("email", "Please enter a valid email address.");
            isValid = false;
        }
    }

    // validate comments
    if(comments === "") {
        displayErrorMessage("comments", "Comments are required.");
        isValid = false;
    }

    // when form is valid, display a message to user
    if(isValid && event.target.checkValidity()) {
        let user = {
            firstName,
            lastName,
            phoneNum,
            email,
            contactMethod,
            comments,
        };

        // display success message
        document.getElementById("successMessage").classList.remove("hide");

        // display values in console
        console.log("First name: " + firstName);
        console.log("Last name: " + lastName);
        console.log("Phone number: " + phoneNum);
        console.log("Email: " + email);
        console.log("Preferred Contact Method: " + contactMethod);
        console.log("Comments: " + comments);

        //display values to user
        document.getElementById("userInfo").innerHTML = `<strong>First name: </strong>${firstName}<br><strong>Last name: </strong>${lastName}<br><strong>Phone number: </strong>${phoneNum}<br><strong>Email: </strong>${email}<br><strong>Preferred Contact Method: </strong>${contactMethod}<br><strong>Comments: </strong>${comments}<br>`;

        // reset the form and success message
        document.getElementById("contactForm").reset();
    }
}

// display the error message(s)
function displayErrorMessage(inputId, message) {
    let errorSpan = document.getElementById(inputId + "Error");
    errorSpan.textContent = message;
}

// event listeners for form submission
document.getElementById("contactForm").addEventListener("submit", validateForm);






// GAME PLAY / CONTEST

// grab elements from HTML
let userGuessElement = document.getElementById("userGuess");
let generatedNumElement = document.getElementById("generatedNum");
let button = document.getElementById("generate");
let results = document.getElementById("contestResults");

// get random number for generatedNum
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// game play
function gamePlay() {

    // define the userGuess and generatedNum
    let userGuess = parseInt(userGuessElement.value);
    let generatedNum;

    // verify that the user input a valid value (not left blank, not < 1, not > 10)
    if(isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        results.textContent = "Please enter a valid number between 1 and 10.";
        generatedNum = "";
        return;
    } else {
        // display generatedNum on screen in "Computer:" field
        generatedNum = randomNumber(1, 10);
        generatedNumElement.value = generatedNum;
    }
    
    // compare the generatedNum to the userGuess to determine a win or loss
    if (userGuess === generatedNum) {
        results.textContent = "Congratulations, you won!";
    } else {
        results.textContent = "Sorry, you did not win. Try again next time!";
    }

    // change generate button to reset to reset the game
    button.value = "Reset";
    button.removeEventListener("click", gamePlay);
    button.addEventListener("click", resetGame);
}

// reset the game
function resetGame() {

    // reset numerical values in each field, results text, and button
    userGuessElement.value = "";
    generatedNumElement.value = "";
    results.textContent = "";
    button.value = "Generate";
    button.removeEventListener("click", resetGame);
    button.addEventListener("click", gamePlay);
}

// event listener to start the game when user clicks generate
button.addEventListener("click", gamePlay);
