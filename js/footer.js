/*
    Author: Ryan Wahl

    Date: 11.02.18
    File: footer.js

    This file is used for the footer. This allows the footer to move with the page.

*/
window.onscroll = function (e) {
    if (document.getElementById("footer2") != null) {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            this.document.getElementById("footer1").style.display = "none";
            this.document.getElementById("footer2").style.display = "inline-block";
        } else {
            this.document.getElementById("footer1").style.display = "block";
            this.document.getElementById("footer2").style.display = "none";
        }
    }

};