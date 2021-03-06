/*
    Author: Ryan Wahl

    Date: 11.02.18
    File: footer.js

    This file is used for the footer. This allows the footer to move with the page.

*/

/*
    - Usage Information -
    There is no javascript function to be run.

    Html Content:
    1. Two footers are required.
    <footer id="footer1">
        content
    </footer>
    <footer id="footer2">
        content
    </footer>

*/

// If the page is at the top then change the footer link #2 text color to gray.

if (window.pageYOffset == 0)
    this.document.getElementById("footer1").getElementsByTagName("a")[1].style.color = "gray";
else
    this.document.getElementById("footer1").getElementsByTagName("a")[1].style.color = "white";

/* Code break down:
    On window scroll -
        if an element with an id of footer2 exists then
            if the page is at the bottom of the page by checking the height and if it is greater than the body height. then
                set the display of footer 1 to none (hide it)
                set the display of footer 2 to inline-block (show it);
        else then
            set the display of footer 1 to block
            set the display of footer 2 to none
    End of onscroll.

*/
window.onscroll = function (e) {
    if (document.getElementById("footer2") != null) {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            this.document.getElementById("footer1").style.display = "none";
            this.document.getElementById("footer2").style.display = "block";
            //Fixes a bug where the screen would glitch if you get the scroll at the very edge of the page perfectly.
            window.scrollTo(0, document.body.scrollHeight);
        } else {
            this.document.getElementById("footer1").style.display = "block";
            this.document.getElementById("footer2").style.display = "none";
            if (window.pageYOffset == 0)
                this.document.getElementById("footer1").getElementsByTagName("a")[1].style.color = "gray";
            else
                this.document.getElementById("footer1").getElementsByTagName("a")[1].style.color = "white";
        }

    }

};