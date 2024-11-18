

export function loadMenuFunction() {
    const menu = {
        starters: [
            { name: "Crispy Onion Rings", description: "Golden, crunchy onion rings served with a smoky chipotle mayo dip." },
            { name: "Loaded Nacho Fries", description: "Seasoned fries topped with melted cheddar, jalapeños, salsa, and sour cream." },
            { name: "Buffalo Cauliflower Bites", description: "Crispy cauliflower florets tossed in buffalo sauce with blue cheese dip." }
        ],
        burgers: [
            { name: "Classic Cheeseburger", description: "Beef patty, melted cheese, lettuce, tomatoes, onions, pickles, house sauce on brioche." },
            { name: "BBQ Pulled Pork Burger", description: "Pulled pork, BBQ sauce, coleslaw, crispy fried onions on sesame seed bun." },
            { name: "Spicy Black Bean Veggie Burger", description: "Black bean patty, pepper jack cheese, avocado, chipotle mayo, on whole wheat bun." }
        ],
        desserts: [
            { name: "Warm Chocolate Lava Cake", description: "Molten chocolate center with vanilla bean ice cream." },
            { name: "Salted Caramel Cheesecake", description: "Cheesecake with graham crust topped with salted caramel." },
            { name: "Churro Bites", description: "Cinnamon-sugar coated churros with chocolate dipping sauce." }
        ]
    };
    const menuSection = document.createElement("div");
    const menuSectionTitle = document.createElement("h1");
    menuSectionTitle.innerText = "Burger Haven Menu 🍔🍟"
    menuSection.appendChild(menuSectionTitle);

    const starterSection = document.createElement("div");
    starterSection.id = "starters";
    const starterSectionTitle = document.createElement("h2");
    starterSection.appendChild(starterSectionTitle);
    starterSectionTitle.innerText = "Starter";
    const starterSectionList = document.createElement("ul");
    starterSection.appendChild(starterSectionList);

    const burgersSection = document.createElement("div");
    burgersSection.setAttribute("id", "burgers");
    const burgersSectionTitle = document.createElement("h2");
    burgersSection.appendChild(burgersSectionTitle);
    burgersSectionTitle.innerText = "Burgers"
    const burgersSectionList = document.createElement("ul");
    burgersSection.appendChild(burgersSectionList);

    const dessertsSection = document.createElement("div");
    dessertsSection.setAttribute("id", "desserts");
    const dessertsSectionTitle = document.createElement("h2");
    dessertsSection.appendChild(dessertsSectionTitle);
    dessertsSectionTitle.innerText = "Starter";
    const dessertsSectionList = document.createElement("ul");
    dessertsSection.appendChild(dessertsSectionList);

    menuSection.append(starterSection, burgersSection, dessertsSection);
    document.getElementById("content").appendChild(menuSection);

    for (let section in menu) {
        console.log(section)
        const sectionElement = document.getElementById(section).querySelector("ul");
        menu[section].forEach(item => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${item.name}</strong><br>${item.description}`;
            sectionElement.appendChild(listItem);
        });
    }



};