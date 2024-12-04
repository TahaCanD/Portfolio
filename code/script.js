const navBar = document.querySelector(".navbar"),
menuBtns = document.querySelectorAll(".menu-icon"),
darkSmoke = document.querySelector(".dark-smoke")

menuBtns.forEach(menuBtns => {
    menuBtns.addEventListener("click", () => {
        navBar.classList.toggle("open")
    })
})
darkSmoke.addEventListener("click", () => {
    navBar.classList.remove("open")
})
// function logout() {
//     fetch('/logout', { method: 'POST' })
//         .then(response => {
//             if (response.ok) {
//                 window.location.href = "/";
//             } else {
//                 alert("Çıkış yapılamadı.");
//             }
//         })
//         .catch(error => console.error("Çıkış sırasında hata:", error));
// }