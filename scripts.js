/*----------------typing animation---------------- */
var typed = new Typed(".typing", {
    strings:["","Web Designer", "Web Developer", "Freelancer"],
    typeSpeed: 100,
    BackSpeed:60,
    loop: true
})

// Function to handle menu item clicks
function handleMenuItemClick(event) {
    const menuItems = document.querySelectorAll(".nav li a");
    menuItems.forEach((menuItem) => {
      menuItem.classList.remove("active");
    });
    event.target.classList.add("active");
  }
  
  // Set event listeners for menu items
  const menuItems = document.querySelectorAll(".nav li a");
  menuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", handleMenuItemClick);
  });

  const styleSwitcherIcon = document.querySelector(".style-switcher-toggler i");

  styleSwitcherIcon.addEventListener("click", () => {
    styleSwitcherIcon.classList.toggle("fa-spin");
  });
  