//...

const divToAnim = document.getElementById("animation");
const button = document.getElementById("button");

const width = window.innerWidth;
const height = window.innerHeight;

let animBegan = false;
button.addEventListener("click", function() {
    if (animBegan == false) {
        divToAnim.style.left = (width - 300) + "px";
        divToAnim.style.top = (height - 200) + "px";
        button.textContent = "Reset";
        animBegan = true;
    } else {
        divToAnim.style.left = "120px";
        divToAnim.style.top = "120px";
        button.textContent = "Restart";
        animBegan = false;
    }
});
