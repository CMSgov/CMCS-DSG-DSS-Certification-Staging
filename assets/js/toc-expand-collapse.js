(function setupNavbarExpansion() {
  const path = document.getElementById("toc-script").getAttribute("data-path");

  // Load the toc expansion state from cookies, if they exist.
  const expandStateCookie = document.cookie.match(
    /(^|\s)expandState=(.*?);/
  ) || [null, null, "{}"];
  const expandState = JSON.parse(decodeURIComponent(expandStateCookie[2]));

  function toggleNav(e) {
    const button = e.target;
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    const controlledID = button.getAttribute("aria-controls");
    const controlled = document.getElementById(controlledID);

    controlled.style.display = isExpanded ? "none" : "";
    button.setAttribute("aria-expanded", !isExpanded);

    // Update the expand state with the new info, then store that in a cookie.
    // Need to set the path on the cookie so that all pages within this site
    // will use the same one; otherwise, the pages in subdirectories will
    // control a seprate cookie. Also keep the cookie around for a year.
    Object.assign(expandState, { [controlledID]: !isExpanded });
    document.cookie = [
      "expandState=",
      encodeURIComponent(JSON.stringify(expandState)),
      ";path=",
      path,
      ";max-age=",
      365 * 24 * 60 * 60, // a year in seconds
    ].join("");
  }

  Array.from(
    document.querySelectorAll("button.ds-c-vertical-nav__label[aria-controls]")
  ).forEach(function (button) {
    button.addEventListener("click", toggleNav);

    const controlledID = button.getAttribute("aria-controls");

    // If the expand-controlled element exists in the known expansion state,
    // update the DOM accordingly.
    if (typeof expandState[controlledID] === "boolean") {
      button.setAttribute("aria-expanded", expandState[controlledID]);
      const controlled = document.getElementById(controlledID);
      controlled.style.display = expandState[controlledID] ? "" : "none";
    }
  });
})();
