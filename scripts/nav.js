(() => {
  const groups = Array.from(document.querySelectorAll(".nav-group"));

  if (!groups.length) {
    return;
  }

  const topbar = document.querySelector(".topbar");
  let lastScrollY = window.scrollY;

  const closeAll = (except) => {
    groups.forEach((group) => {
      if (group !== except) {
        group.open = false;
      }
    });
  };

  groups.forEach((group) => {
    group.addEventListener("toggle", () => {
      if (group.open) {
        closeAll(group);
      }
    });

    group.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => closeAll());
    });
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".nav-group")) {
      closeAll();
    }
  });

  if (topbar) {
    window.addEventListener(
      "scroll",
      () => {
        const currentY = window.scrollY;
        const scrollingDown = currentY > lastScrollY + 6;
        const scrollingUp = currentY < lastScrollY - 6;

        if (scrollingDown && currentY > 80) {
          topbar.classList.add("is-collapsed");
        } else if (scrollingUp) {
          topbar.classList.remove("is-collapsed");
        }

        lastScrollY = currentY;
      },
      { passive: true }
    );
  }
})();
