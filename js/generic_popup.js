/*
    Controls the generic popup menu for westmec.
    Used to dynamicly create popup menus.
*/

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) { //Checks to see if the browser is mobile.
    //Gets the html portion of the popup menu.
    var elm = document.getElementById("window");

    //hides the menu by default
    elm.style.display = "none";

    //A function to open the menu that is used in the inclick="" attribute
    function openmenu(title, p, header) {
        alert("That feature is disabled on mobile!");
    }
} else {
    //Gets the html portion of the popup menu.
    var elm = document.getElementById("window");

    //hides the menu by default
    elm.style.display = "none";

    //A function to open the menu that is used in the inclick="" attribute
    function openmenu(title, p, header) {
        elm.style.display = "block"; //Shows the menu.
        //Grabs all of the elements to insert the text.
        elm.getElementsByTagName("p")[0].innerHTML = title;
        elm.getElementsByTagName("p")[1].innerHTML = p;
        elm.getElementsByTagName("h1")[0].innerHTML = header;
    }

    //closes the menu
    function closemenu() {
        elm.style.display = "none"; //Hides it again.
        // Resets the menu position.
        elm.style.top = "50%";
        elm.style.left = "50%";
    }

    dragElement(elm);

    // Test drag stuff
    //grabs the element and runs the function dragelement

    function dragElement(elmnt) {
        //Stores the current and past positions
        var pos1 = 0,
            pos2 = 0,
            pos3 = 0,
            pos4 = 0;
        //pos1 and 2 are current values pos3 and 4 are past values
        if (document.getElementById(elm.id + "header")) {
            // get the element with an id of header added to it. (S)
            document.getElementById(elm.id + "header").onmousedown = dragMouseDown;
        } else {
            // otherwise, move the DIV from anywhere inside the DIV
            elmnt.onmousedown = dragMouseDown;
        }

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // get the mouse cursor position at startup
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            // call a function whenever the cursor moves
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            // set the element's new position
            if (!((elmnt.offsetTop - pos2) < 0))
                elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            if (!((elmnt.offsetLeft - pos1) < 0))
                elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            // stop moving the menu when mouse button is released
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }
}