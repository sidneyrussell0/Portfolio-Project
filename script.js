let cursorBall = document.querySelector(".cursor-ball");
let cursorOutline = document.querySelector(".cursor-outline");

document.addEventListener("mousemove", (e) => {
    cursorBall.style.top = e.pageY + "px";
    cursorBall.style.left = e.pageX + "px";

    cursorOutline.style.top = e.pageY + "px";
    cursorOutline.style.left = e.pageX + "px";
});

document.addEventListener("mousedown", (e) => {
    if (e.button === 0) {
        cursorOutline.classList.add("cursor-mousedown");
    }
});

document.addEventListener("mouseup", () => {
    cursorOutline.classList.remove("cursor-mousedown");
});