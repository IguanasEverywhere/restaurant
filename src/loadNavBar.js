function loadNavBar() {
    let content = document.getElementById("content");
    let navBar = document.createElement("div");
    navBar.classList.add("navBar")
    content.appendChild(navBar);

    let navLinks = document.createElement("div");
    navLinks.classList.add("navLinks");
    navBar.appendChild(navLinks);

    let homeLink = document.createElement("a");
    homeLink.setAttribute('id', 'homeLink');
    homeLink.textContent = "Home";
    let menuLink = document.createElement("a");
    menuLink.setAttribute('id', 'menuLink');
    menuLink.textContent = "Menu";
    let contactLink = document.createElement("a");
    contactLink.setAttribute('id', 'contactLink');
    contactLink.textContent = "Contact";
    navLinks.appendChild(homeLink);
    navLinks.appendChild(menuLink);
    navLinks.appendChild(contactLink);

}


export { loadNavBar };