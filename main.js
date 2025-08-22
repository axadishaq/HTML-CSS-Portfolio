const { animate, inView, stagger } = Motion;

// Animate on page load
animate(
   ".hero-left",
   { opacity: [0, 1], x: [-100, 0] }, // slide from left (-100px) to original
   { duration: 1.5, easing: "ease-out" }
);

// Animate again when user scrolls back
inView(".hero-left", ({ target, enter, leave }) => {
   enter(() => {
      animate(
         target,
         { opacity: [0, 1], x: [-100, 0] },
         { duration: 1.5, easing: "ease-out" }
      );
   });

   leave(() => {
      animate(target, { opacity: 0, x: -100 }, { duration: 1 });
   });
});
//child with small delay
animate(
   ".hero-left > *", // all direct children
   { opacity: [0, 1], x: [-100, 0] },
   { duration: 1, delay: stagger(0.3), easing: "ease-out" }
);

// <!-- FAQ Script  -->

document.querySelectorAll(".faq-question").forEach((question) => {
   question.addEventListener("click", function () {
      const item = this.parentElement;
      const isActive = item.classList.contains("active");
      // Close all
      document
         .querySelectorAll(".faq-item")
         .forEach((el) => el.classList.remove("active"));
      // Open if not already active
      if (!isActive) {
         item.classList.add("active");
      }
   });
});

// Get all "View Project" buttons
const projectButtons = document.querySelectorAll(".btn2");
projectButtons.forEach((button) => {
   button.addEventListener("click", function (event) {
      const linkHref = button.getAttribute("href");
      if (!linkHref || linkHref.trim() === "" || linkHref.trim() === "#") {
         button.innerHTML = "Will live soon";
         button.style.color = "red";
         button.style.borderColor = "red";
         // Ensure the link doesn't navigate anywhere
         button.setAttribute("href", "javascript:void(0);"); // Prevents navigation
      }
   });
});

