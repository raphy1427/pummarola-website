(() => {
  const groups = Array.from(document.querySelectorAll(".nav-group"));

  if (!groups.length) {
    return;
  }

  const topbar = document.querySelector(".topbar");
  let lastScrollY = window.scrollY;
  const supportsHover =
    typeof window.matchMedia === "function" &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  const closeAll = (except) => {
    groups.forEach((group) => {
      if (group !== except) {
        group.open = false;
      }
    });
  };

  groups.forEach((group) => {
    const summary = group.querySelector("summary");

    if (summary) {
      summary.setAttribute("aria-expanded", String(group.open));
    }

    group.addEventListener("toggle", () => {
      if (summary) {
        summary.setAttribute("aria-expanded", String(group.open));
      }

      if (group.open) {
        closeAll(group);
      }
    });

    if (summary && !supportsHover) {
      summary.addEventListener("click", (event) => {
        event.preventDefault();
        const willOpen = !group.open;
        closeAll(group);
        group.open = willOpen;
      });
    }

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
