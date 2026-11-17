(function () {
  var root = document.documentElement;
  var toggle = document.getElementById("theme-toggle");
  var menu = document.getElementById("menu");

  function current() {
    return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function paint(theme) {
    if (!toggle) return;
    var dark = theme === "dark";
    toggle.setAttribute("aria-pressed", dark ? "true" : "false");
    toggle.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
  }

  paint(current());

  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = current() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try {
        localStorage.setItem("seatrota-theme", next);
      } catch (e) {}
      paint(next);
    });
  }

  if (menu) {
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.removeAttribute("open");
      });
    });
  }
})();
