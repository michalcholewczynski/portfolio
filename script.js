function initializeNavigation() {
  const navigation = document.querySelector("nav");

  if (!navigation) {
    return;
  }

  const navigationItems = Array.from(navigation.querySelectorAll('a[href^="#"]'))
    .map((link) => {
      let targetId;

      try {
        targetId = decodeURIComponent(link.hash.slice(1));
      } catch {
        return null;
      }

      const target = document.getElementById(targetId);

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
  let scrollFrame = null;

  function setActiveSection(sectionId) {
    if (sectionId === activeSectionId) {
      return;
    }

    activeSectionId = sectionId;

    navigationItems.forEach(({ link, target }) => {
      const isActive = target.id === sectionId;

      link.classList.toggle("is-active", isActive);

      if (isActive) {
        link.setAttribute("aria-current", "location");
        return;
      }

      link.removeAttribute("aria-current");
    });
  }

  function getActiveSectionId() {
    const markerPosition = window.scrollY + window.innerHeight * 0.35;
    let activeTarget = navigationItems[0].target;

    navigationItems.forEach(({ target }) => {
      const targetTop = target.getBoundingClientRect().top + window.scrollY;

      if (targetTop <= markerPosition) {
        activeTarget = target;
      }
    });

    const documentBottom = window.scrollY + window.innerHeight;
    const pageBottom = document.documentElement.scrollHeight;

    if (documentBottom >= pageBottom - 2) {
      activeTarget = navigationItems[navigationItems.length - 1].target;
    }

    return activeTarget.id;
  }

  function updateActiveSection() {
    scrollFrame = null;
    setActiveSection(getActiveSectionId());
  }

  function scheduleActiveSectionUpdate() {
    if (scrollFrame !== null) {
      return;
    }

    scrollFrame = window.requestAnimationFrame(updateActiveSection);
  }

  function scrollToSection(target) {
    target.scrollIntoView({
      behavior: reducedMotionQuery.matches ? "auto" : "smooth",
      block: "start",
    });
  }

  function handleNavigationClick(event, target) {
    event.preventDefault();
    scrollToSection(target);

    const targetUrl = new URL(window.location.href);
    targetUrl.hash = target.id;

    if (window.location.href !== targetUrl.href) {
      window.history.pushState({ section: target.id }, "", targetUrl);
    }

    setActiveSection(target.id);
  }

  function handleHistoryNavigation() {
    const targetId = window.location.hash.slice(1);
    const navigationItem = navigationItems.find(({ target }) => target.id === targetId);

    if (navigationItem) {
      scrollToSection(navigationItem.target);
    }

    scheduleActiveSectionUpdate();
  }

  navigationItems.forEach(({ link, target }) => {
    link.addEventListener("click", (event) => {
      handleNavigationClick(event, target);
    });
  });

  window.addEventListener("scroll", scheduleActiveSectionUpdate, { passive: true });
  window.addEventListener("resize", scheduleActiveSectionUpdate);
  window.addEventListener("hashchange", handleHistoryNavigation);
  window.addEventListener("popstate", handleHistoryNavigation);

  scheduleActiveSectionUpdate();
}

initializeNavigation();
