function loadMenuPage() {
    let content = document.getElementById("content");

    let mainPageBody = document.createElement("div");
    mainPageBody.classList.add("mainPageBody");
    content.appendChild(mainPageBody);

    let menuTitle = document.createElement("h1");
    menuTitle.textContent = "Menu";
    mainPageBody.appendChild(menuTitle);

    let menuItems = document.createElement("div");
    menuItems.classList.add("menuItems");
    mainPageBody.appendChild(menuItems);

    let menuItem1 = document.createElement("div");
    menuItem1.classList.add("menuItem");
    let menuItem1Text = document.createElement("div");
    menuItem1Text.textContent="Birch Leave Salad................$10.99";
    menuItem1.appendChild(menuItem1Text);
    menuItems.appendChild(menuItem1);
    let birchImage = document.createElement("img");
    birchImage.classList.add("menuImages");
    birchImage.src = "../src/images/birchleaves.jpeg";
    birchImage.alt="birch leaves";
    birchImage.width="150";
    birchImage.height="150";
    menuItem1.appendChild(birchImage);


    let menuItem2 = document.createElement("div");
    menuItem2.classList.add("menuItem");
    let menuItem2Text = document.createElement("div");
    menuItem2Text.textContent="Dandelion Platter................$12.99";
    menuItem2.appendChild(menuItem2Text);
    menuItems.appendChild(menuItem2);
    let dandelionImage = document.createElement("img");
    dandelionImage.classList.add("menuImages");
    dandelionImage.src = "../src/images/DandelionFlower.jpeg";
    dandelionImage.alt="dandelions";
    dandelionImage.width="150";
    dandelionImage.height="150";
    menuItem2.appendChild(dandelionImage);

    let menuItem3 = document.createElement("div");
    menuItem3.classList.add("menuItem");
    let menuItem3Text = document.createElement("div");
    menuItem3Text.textContent="Lavender Surprise................$14.99";
    menuItem3.appendChild(menuItem3Text);
    menuItems.appendChild(menuItem3);
    let lavenderImage = document.createElement("img");
    lavenderImage.classList.add("menuImages");
    lavenderImage.src = "../src/images/lavender.jpeg";
    lavenderImage.alt="lavender";
    lavenderImage.width="150";
    lavenderImage.height="150";
    menuItem3.appendChild(lavenderImage);

    let menuItem4 = document.createElement("div");
    menuItem4.classList.add("menuItem");
    let menuItem4Text = document.createElement("div");
    menuItem4Text.textContent="Berry Dessert................$6.99";
    menuItem4.appendChild(menuItem4Text);
    menuItems.appendChild(menuItem4);
    let berriesImage = document.createElement("img");
    berriesImage.classList.add("menuImages");
    berriesImage.src = "../src/images/berries.jpeg";
    berriesImage.alt="berries";
    berriesImage.width="150";
    berriesImage.height="150";
    menuItem4.appendChild(berriesImage);





    

}

export { loadMenuPage };