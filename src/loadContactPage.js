function loadContactPage() {
    let content = document.getElementById("content");

    let mainPageBody = document.createElement("div");
    mainPageBody.classList.add("mainPageBody");
    content.appendChild(mainPageBody);

    let contactTitle = document.createElement("h1");
    contactTitle.textContent = "Contact Us";
    mainPageBody.appendChild(contactTitle);

    let contactBody = document.createElement("div");
    contactBody.classList.add("contactBody");
    mainPageBody.appendChild(contactBody);

    let contactInfo = document.createElement("div");
    contactInfo.classList.add("contactInfo");
    contactBody.appendChild(contactInfo);

    let phoneInfo = document.createElement("p");
    phoneInfo.classList.add("contactInfoItem");
    phoneInfo.textContent = "Phone: (555) 555-5555";
    contactInfo.appendChild(phoneInfo);

    let emailInfo = document.createElement("a");
    emailInfo.classList.add("contactInfoItem");
    emailInfo.textContent = "CaptainIguana@iguanasdiner.com";
    emailInfo.setAttribute('href', 'http://www.google.com');
    contactInfo.appendChild(emailInfo);


}


export { loadContactPage };