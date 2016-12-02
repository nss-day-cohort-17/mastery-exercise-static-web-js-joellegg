// Create a `tree` function that should build a pine tree out of a character in the Chrome dev tools console.

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
    // 1. Get reference to tree height from user input & log to console
    var treeHeight = document.getElementById('heightInput').value;
    // console.log(treeHeight);

    // 1. Get reference to character to make tree & log to console
    var chara = document.getElementById('charInput').value;
    // console.log(chara);

    // if either field is blank display alert
    if (treeHeight === "" || chara === "") {
        alert("Please enter values for both fields");
    }

    // for loop to get tree (hopefully)
    for (var i = 0; i < treeHeight; i++) {
        var x = (2*i)+1;
        var y = (treeHeight - i);
        var spaces = " ".repeat(y);
        var xTimes = chara.repeat(x);
        console.log(spaces + xTimes);
    }
}


// 3. Call function to run on button click with event listener
growButton.addEventListener('click', makeTree);
// 3. Call function to run on return key press with event listener on either field
var treeHeight = document.getElementById('heightInput');
var chara = document.getElementById('charInput');
treeHeight.addEventListener('keypress', enterKeyPressed);
chara.addEventListener('keypress', enterKeyPressed);
