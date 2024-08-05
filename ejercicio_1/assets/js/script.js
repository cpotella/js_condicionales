let img = document.getElementById("myImage");

img.addEventListener("click", function() {
    if (img.style.border) {
        img.style.border = "";
    } else {
        img.style.border = "2px solid red";
    }
});


// img.addEventListener("click", function() {
//     img.classList.toggle("borde-rojo");
// });