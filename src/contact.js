export function loadContactPage() {
    const contactContainer = document.createElement("div")
    contactContainer.className = "contactContainer";

    const titleContainer = document.createElement("div");
    titleContainer.className = "titleContainer";

    const contactTitle = document.createElement("h1");
    contactTitle.className = "contactTitle";
    contactTitle.innerText = "Contact"

    titleContainer.appendChild(contactTitle)

    const contactListContainer = document.createElement("div");
    contactListContainer.className = "contactListContainer";

    const contactList = document.createElement("ul");
    const phoneContact = document.createElement("li");
    const adressContact = document.createElement("li");
    const mailContact = document.createElement("li");
    const instaContact = document.createElement("li");

    phoneContact.innerText = "+33 1 23 45 67 89";
    adressContact.innerText = "23 rue Jean Baptiste, 75004 Paris";
    mailContact.innerText = "contact@restaurant.fr";
    instaContact.innerText = "Suivez-nous sur les réseaux !";

    contactList.append(phoneContact, adressContact, mailContact, instaContact);
    contactListContainer.appendChild(contactList);
    contactContainer.appendChild(titleContainer);
    contactContainer.appendChild(contactListContainer);
    document.getElementById("content").appendChild(contactContainer);



}