import burgerPicture from "./burgerPicture.jpg";


export function loadHomeFunction() {

    const divContent = document.getElementById("content");

    // Create elements for the first section
    const restaurantName = document.createElement("h1");
    restaurantName.className = "restaurantName";
    restaurantName.textContent = "President's place";

    const subtitleName = document.createElement("h3");
    subtitleName.className = "subtitleName";
    subtitleName.textContent = "Eating well is the beginning of happiness";

    const bookButton = document.createElement("button");
    bookButton.className = "bookNow";
    bookButton.textContent = "Book now";

    const secretRecipeTitle = document.createElement("h2");
    secretRecipeTitle.className = "SecretRecipeTitle";
    secretRecipeTitle.textContent = "Our secret recipe";

    const secretRecipeText = document.createElement("p");
    secretRecipeText.className = "SecretRecipe";
    secretRecipeText.textContent = "Love. Quality. Time.";

    // Append these elements to the body (or a specific container)
    const textContent = document.createElement("div");
    textContent.className = "textContent";
    divContent.appendChild(textContent);

    textContent.append(
        restaurantName,
        subtitleName,
        bookButton,
        secretRecipeTitle,
        secretRecipeText
    );

    // Create the image illustration container
    const imageIllustration = document.createElement("div");
    imageIllustration.className = "imageIllustration";

    const burgerImage = document.createElement("img");
    burgerImage.src = burgerPicture;
    burgerImage.alt = "Burger Image";
    burgerImage.width = 350;
    burgerImage.height = 300;

    // Append the image to its container and then to the body
    imageIllustration.appendChild(burgerImage);
    divContent.appendChild(imageIllustration);
};