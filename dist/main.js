const toggleButton = document.getElementById("toggle-checkbox");
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
   if (currentTheme === "light") {
      toggleButton.checked = true;
   }
   document.documentElement.setAttribute("data-theme", currentTheme);
}

toggleButton.addEventListener("change", function () {
   if (this.checked) {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
   } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
   }
});
