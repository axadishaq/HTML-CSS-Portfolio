// Get all "View Project" buttons
const projectButtons = document.querySelectorAll(".btn2");
projectButtons.forEach((button) => {
   button.addEventListener("click", function (event) {
      const linkHref = button.getAttribute("href");
      if (!linkHref || linkHref.trim() === "" || linkHref.trim() === "#") {
         button.innerHTML = "Not live";
         button.style.color = "red";
         button.style.borderColor = "red";
         // Ensure the link doesn't navigate anywhere
         button.setAttribute("href", "javascript:void(0);"); // Prevents navigation
      }
   });
});
