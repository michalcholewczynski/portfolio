function initializeNavigation() {
  const navigation = document.querySelector("nav");

  if (!navigation) {
    return;
  }

  const navigationItems = Array.from(navigation.querySelectorAll('a[href^="#"]'))
    .map((link) => {
      const target = document.getElementById(link.hash.slice(1));

      if (!target) {
        return null;
      }

      return { link, target };
    })
    .filter(Boolean);

  if (navigationItems.length === 0) {
    return;
  }

  const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  let activeSectionId = "";

  function setActiveSection(sectionId) {
    if (sectionId === activeSectionId) {
      return;
    }

    activeSectionId = sectionId;

    navigationItems.forEach(({ link, target }) => {
      const isActive = target.id === sectionId;

      if (isActive) {
        link.setAttribute("aria-current", "location");
        return;
      }

      link.removeAttribute("aria-current");
    });
  }

  function scrollToSection(target) {
    target.scrollIntoView({
      behavior: reducedMotionQuery.matches ? "auto" : "smooth",
      block: "start",
    });
  }

  navigationItems.forEach(({ link, target }) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      scrollToSection(target);

      if (window.location.hash !== `#${target.id}`) {
        window.history.pushState({ section: target.id }, "", `#${target.id}`);
      }

      setActiveSection(target.id);
    });
  });

  function handleHistoryNavigation() {
    const targetId = window.location.hash.slice(1);
    const navigationItem = navigationItems.find(({ target }) => target.id === targetId);

    if (!navigationItem) {
      return;
    }

    scrollToSection(navigationItem.target);
    setActiveSection(navigationItem.target.id);
  }

  window.addEventListener("hashchange", handleHistoryNavigation);
  window.addEventListener("popstate", handleHistoryNavigation);

  if (!("IntersectionObserver" in window)) {
    setActiveSection(navigationItems[0].target.id);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

      if (visibleEntry) {
        setActiveSection(visibleEntry.target.id);
      }
    },
    {
      rootMargin: "-20% 0px -55% 0px",
      threshold: [0.1, 0.4, 0.75],
    }
  );

  navigationItems.forEach(({ target }) => observer.observe(target));

  const initialSectionId = window.location.hash.slice(1);
  const initialItem = navigationItems.find(({ target }) => target.id === initialSectionId);
  setActiveSection(initialItem ? initialItem.target.id : navigationItems[0].target.id);
}

initializeNavigation();
