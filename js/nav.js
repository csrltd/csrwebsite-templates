function OpenCloseMenu() {
    const menu = document.getElementById("nav-menu");
    const menuBtn = document.getElementById("menuBtn")
    const CloseMenuBtn = document.getElementById("CloseMenuBtn")
    if (menu.style.display === "none") {
        menu.style.display = "flex"
        menuBtn.style.display= "none"
        CloseMenuBtn.style.display= "block"
    } else {
        menu.style.display = "none"
        menuBtn.style.display = "block"
        CloseMenuBtn.style.display = "none"
    }
}