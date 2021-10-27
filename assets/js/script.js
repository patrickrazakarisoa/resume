/*===================================*
	1. LINK-MENU-CONTROL JS
*===================================*/
const links  = document.querySelectorAll(".nav-link");
links.forEach((item) => {
     item.addEventListener("click", () => {
          let element = document.getElementById(item.getAttribute("data-link"));
          element.scrollIntoView({behavior:"smooth", block:"start"}); // option pour block:"start/center/end"
     })
})
// $('.nav-link').each( item => {
//      item.on("click", () => {
//           let element = $(item.getAttribute("data-link"));
//           element.scrollIntoView({behavior:"smooth", block:"center"}); // option pour block:"start/center/end"
//      })
// }) 

/*===================================*
	19. THEME-LOCALSTORAGE JS
*===================================*/
const bodyBg = document.querySelector(".background");
// bodyBg.addEventListener("click", () => {
//      document.body.classList.toggle("bodyBackground");
// })
if(localStorage.getItem('theme')) {
     if(localStorage.getItem('theme') == 'sombre') {
          modeSombre();
     }
}
function modeSombre() {
     document.body.className = 'bodyBackground';
     localStorage.setItem('theme', 'sombre');
}
bodyBg.addEventListener("click", () => {
     if(document.body.classList.contains('bodyBackground')) {
          // Mode clair
          document.body.className = '';
          localStorage.setItem('theme', 'clair');
     } else {
          // Mode sombre
          modeSombre();
     }
})