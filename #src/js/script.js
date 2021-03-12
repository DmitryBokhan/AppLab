//@@include('alert.js')


let button = document.getElementsByClassName("list__title");
for (let i = 0; i < button.length; i++) {
   button[i].addEventListener("click", function () {
      this.classList.toggle("list_active");
      let panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
         panel.style.maxHeight = null;
      }
      else {
         panel.style.maxHeight = panel.scrollHeight + "px";
      }
   })
}