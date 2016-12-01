// Create a `tree` function that should build a pine tree out of a character in the Chrome dev tools console.

// 1. Get reference to tree height from user input
var treeHeight = document.getElementById('heightInput');
// 1. Get reference to character to make tree
var chara = document.getElementById('charInput');
// 1. Get reference to button "grow your tree"
var growButton = document.getElementById('growTree');

// run makeTree when enter key is pressed in input field
function enterKeyPressed (e) {
    var keyPressed = e.keyCode;
    if (keyPressed === 13) {
        makeTree();
    }
}

// 2. function to make tree
function makeTree () {
    // log tree height to the console
    console.log(treeHeight.value);
    // log character to the console
    console.log(chara.value);
    // if either field is blank display alert
    if (treeHeight.value === "" || chara.value === "") {
        alert("Please enter values for both fields");
    }
    // log tree to console
}


// 3. Call function to run on button click with event listener
growButton.addEventListener('click', makeTree);
// 3. Call function to run on return key press with event listener on either field
treeHeight.addEventListener('keypress', enterKeyPressed);
chara.addEventListener('keypress', enterKeyPressed);
