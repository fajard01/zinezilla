const nav = document.querySelector(".navbar");
let open;

function openMenu() {
    if (open) {
        nav.style.display = "none";
        open = false;
    } else if (!open) {
        nav.style.display = "block";
        open = true;
    }
}