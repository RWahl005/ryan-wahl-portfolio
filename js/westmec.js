/*
    Controls the popup menu for westmec.
*/

var westmec = document.getElementById("west-mec");

westmec.style.display = "none"; //Hides the menu by default

function openmenu() {
    document.getElementById("west-mec").style.display = "block"; //Shows the menu.
}

function closemenu() {
    document.getElementById("west-mec").style.display = "none"; //Hides it again.
    // Resets the menu position.
    westmec.style.top = "50%";
    westmec.style.left = "50%";
}

// Test drag stuff
dragElement(document.getElementById("west-mec")); //grabs the element and runs the function dragelement

function dragElement(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    //pos1 and 2 are current values pos3 and 4 are past values
    if (document.getElementById(westmec.id + "header")) {
        // get the element with an id of header added to it. (S)
        document.getElementById(westmec.id + "header").onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV: 
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        if (!((elmnt.offsetTop - pos2) < 0))
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        if (!((elmnt.offsetLeft - pos1) < 0))
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}