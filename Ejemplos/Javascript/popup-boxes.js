// JavaScript Popup Boxes
// https://www.w3schools.com/js/js_popup.asp

// Alert Box
alert("I am an alert box!");

// Confirm Box
if (confirm("Press a button!")) {
    txt = "You pressed OK!";
} else {
    txt = "You pressed Cancel!";
}
document.write(txt + "<br>");

// Prompt Box
var person = prompt("Please enter your name", "Mi nombre");

if (person == null || person == "") {
    txt = "User cancelled the prompt.";
} else {
    txt = "Hello " + person + "! How are you today?";
}
document.write(txt);

// Line Breaks
alert("Hello\nHow are you?");
