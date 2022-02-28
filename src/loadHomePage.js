import iguanaImage from './images/iguanaEating.png';

function loadHomePage() {
    let content = document.getElementById("content");

    let mainPageBody = document.createElement("div");
    mainPageBody.classList.add("mainPageBody");
    content.appendChild(mainPageBody);

    let restaurantTitle = document.createElement("div");
    restaurantTitle.classList.add("restaurantTitle");
    mainPageBody.appendChild(restaurantTitle);
    let restaurantTitleText = document.createElement("h1");
    restaurantTitleText.textContent = "Iguanas Diner";
    restaurantTitle.appendChild(restaurantTitleText);

    let logo = document.createElement("div");
    logo.classList.add("logo");

    const logoImage = new Image();
    logoImage.src = iguanaImage;

    // let logoImage = document.createElement("img");
    // logoImage.src = "../src/images/iguanaEating.png";
    logoImage.alt="iguana eating";
    logoImage.width="400";
    logoImage.height="300";
    mainPageBody.append(logoImage);

    let testimonials = document.createElement("div");
    testimonials.classList.add("testimonials");
    mainPageBody.append(testimonials);

    let testimonial1 = document.createElement("div");
    testimonial1.classList.add("testimonial1");
    testimonials.appendChild(testimonial1);
    let testimonial1Text = document.createElement("p");
    testimonial1Text.textContent = "The best grub you can lash your tongue out at this side of the Mississippi!";
    testimonial1.appendChild(testimonial1Text);

    let testimonial2 = document.createElement("div");
    testimonial2.classList.add("testimonial2");
    testimonials.appendChild(testimonial2);
    let testimonial2Text = document.createElement("p");
    testimonial2Text.textContent = "Who needs flies? Try their fries!";
    testimonial2.appendChild(testimonial2Text);

    let testimonial3 = document.createElement("div");
    testimonial3.classList.add("testimonial3");
    testimonials.appendChild(testimonial3);
    let testimonial3Text = document.createElement("p");
    testimonial3Text.textContent = "You'll go bug-eyed for their herbivorous offerings!";
    testimonial3.appendChild(testimonial3Text);

}

export { loadHomePage };