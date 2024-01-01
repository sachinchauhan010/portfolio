let crser = document.querySelector("#curser");
let blr=document.querySelector("#curser_blur");
document.addEventListener("mousemove", function (dets) {
    crser.style.left = dets.x + "px";
    crser.style.top = dets.y + "px";
    blr.style.left = dets.x - 250 + "px";
    blr.style.top = dets.y - 250 + "px";
})