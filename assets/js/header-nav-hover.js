var navItems = $(".header-nav-list-item-link");
navItems.each(function () {
  this.addEventListener("mouseover", function () {
    this.classList.add("nav-item-active");
  });
  this.addEventListener("mouseout", function () {
    this.classList.remove("nav-item-active");
  });
});
