/* Declare variables below to save the different sections (divs) of your story*/

let storypart2Save = document.querySelector(".option-one-screen");
let storypart2Defeat = document.querySelector(".option-two-screen");
let storypart3Save = document.querySelector(".option-one-end");
let storypart3Defeat= document.querySelector(".option-two-end");
let OpeningMessage = document.querySelector(".message");
let Question = document.querySelector(".question");
let WinButton = document.querySelector(".option-one");
let LoseButton = document.querySelector(".option-two");


// When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables! //

WinButton.onclick=function(){
storypart2Save.style.display="block";

};

LoseButton.onclick=function(){
storypart2Defeat.style.display="block";
};



//


