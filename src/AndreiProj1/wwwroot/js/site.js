//Text with JS
//var myElement = document.getElementById("thought");
//myElement.innerHTML = "Done by js";

//Text with jQuery
var myElement = $("#thought");
myElement.text("This is by jQuery");


//Events with JS
var main = document.getElementById("main");
main.onmouseenter = function () {
    main.style = "background: #888";
}

main.onmouseleave = function () {
    main.style = "";
}

//Events with jQuery:
var main = $("#main");
main.on("mouseenter", function () {
    $("#main").css("background-color", "yellow")
});
main.on("mouseleave", function () {
    $("#main").css("background-color", "")
});