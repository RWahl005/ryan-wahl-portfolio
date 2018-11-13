/*
    Author: Ryan Wahl

    Date: 11.02.18
    File: footer.js

    This file is used for the footer. This allows the footer to move with the page.

*/

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
            this.document.getElementById("footer2").style.display = "inline-block";
            //Fixes a bug where the screen would glitch if you get the scroll at the very edge of the page perfectly.
            window.scrollTo(0, document.body.scrollHeight);
        } else {
            this.document.getElementById("footer1").style.display = "block";
            this.document.getElementById("footer2").style.display = "none";
        }

    }

    // // window.innerHeight + 
    // var element = this.document.getElementsByTagName("nav")[0];
    // // if (element.scrollTop + element.innerHeight >= this.scrollHeight) {
    // console.info(this.document.body.scrollTop);
    // if (this.document.body.scrollTop == 0) {
    //     this.document.getElementById("footer1").getElementsByTagName("a")[1].style.color = "gray";
    // } else {
    //     this.document.getElementById("footer1").getElementsByTagName("a")[1].style.color = "blue";
    // }

};