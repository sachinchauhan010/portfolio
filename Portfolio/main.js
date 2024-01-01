let crser = document.querySelector("#curser")
document.addEventListener("mousemove", function (dets) {
    crser.style.left = dets.x + "px"
    crser.style.top = dets.y + "px"
})