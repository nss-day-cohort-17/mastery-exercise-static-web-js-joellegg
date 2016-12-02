// Create a `tree` function that should build a pine tree out of a character in the Chrome dev tools console.

// 1. Get reference to button "grow your tree"
var growButton = document.getElementById('growTree');
var treeHeight = document.getElementById('heightInput');
var chara = document.getElementById('charInput');

// run makeTree when enter key is pressed in input field
function enterKeyPressed (e) {
    var keyPressed = e.key;
    if (keyPressed === "Enter") {
        getSpecs();
    }
}

// set user input to an object
function getSpecs () {
    // 1. Get reference to tree height from user input & log to console
    var treeHeight = document.getElementById('heightInput').value;
    // 1. Get reference to character to make tree & log to console
    var chara = document.getElementById('charInput').value;
    var treeSpecs = {
        height: treeHeight,
        character: chara
    };
    makeTree(treeSpecs);
}


// 2. function to make tree
function makeTree (treeSpecs) {
    // if either field is blank display alert
    if (treeSpecs.height === "" || treeSpecs.character === "") {
        alert("Please enter values for both fields");
    }
    // for loop to get tree (hopefully)
    for (var i = 0; i < treeSpecs.height; i++) {
        var x = (2*i)+1;
        var y = (treeSpecs.height - i);
        var spaces = " ".repeat(y);
        var xTimes = treeSpecs.character.repeat(x);
        console.log(spaces + xTimes);
    }
}

// 3. Call function to run on button click with event listener
growButton.addEventListener('click', getSpecs);
// 3. Call function to run on return key press with event listener on either field
treeHeight.addEventListener('keypress', enterKeyPressed);
chara.addEventListener('keypress', enterKeyPressed);
