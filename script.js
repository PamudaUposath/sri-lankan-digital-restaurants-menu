const menu = [
    { 
        name: "Parippu Vada",
        displayName: "Parippu Vada </br> <b style='font-size: 0.8em;'>LKR 150</b>", 
        description: "Parippu wade is a popular Sri Lankan snack of fried lentil patties. It's a common street food and tea-time snack, and it's also vegan, vegetarian, gluten-free, and low-carb.",
        ingredients: "Soaked yellow split peas (chana dal), Curry leaves, Onion, Green chilies, Chili flakes, Salt, Cumin seeds, Bread flour, Coconut oil",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh8jSbPTwGBGlh1y5GQyZS2C_Of6oV5qSdxrfyIviyIP4iae-_S412kZ6wcBOJE7f3gfVfvKaZvwjXHZm8kJ7Z5haTqjlOEJQAu3CpVsSi-oOt5XxrrKZOw_m2bSsWDkfAIjIB0cukSeXoJgn4JuzZWDzo9sDcOM_KJkS6uciIeunc6UelytU6KOIQnBg/s6720/_O2A1320-1.jpg",
        price: "LKR 150"
    },
    { 
        name: "Ulundu Vada",
        displayName: "Ulundu Vada </br> <b style='font-size: 0.8em;'>LKR 120</b>", 
        description: "Ulundu Vada is a South Indian deep-fried snack made from urad dal (black gram). It has a crispy exterior and a soft, fluffy interior, often served with chutney or sambar.",
        ingredients: "Urad dal (black gram), Onion, Green chilies, Curry leaves, Black pepper, Cumin seeds, Salt, Oil for frying",
        image: "https://www.sharmispassions.com/wp-content/uploads/2011/01/MeduVadai3.jpg",
        price: "LKR 120"
    },
    { 
        name: "Vegetable Rolls",
        displayName: "Vegetable Rolls </br> <b style='font-size: 0.8em;'>LKR 200</b>", 
        description: "Vegetable rolls are Sri Lankan-style crispy rolls filled with a spiced vegetable mixture, coated in breadcrumbs, and deep-fried. They are a popular street food and tea-time snack.",
        ingredients: "Potatoes, Carrots, Leeks, Onion, Green chilies, Curry powder, Pepper, Salt, Breadcrumbs, Flour batter, Oil for frying",
        image: "https://static.showit.co/800/D0xOCAJuS2-072g0uUIOyQ/shared/mutton_rolls.jpg",
        price: "LKR 200"
    },
    { 
        name: "Coconut Roti (Pol Roti)",
        displayName: "Coconut Roti (Pol Roti) </br> <b style='font-size: 0.8em;'>LKR 100</b>", 
        description: "Coconut Roti (Pol Roti) is a simple and hearty Sri Lankan flatbread made with grated coconut and flour, often enjoyed with spicy sambols or curries.",
        ingredients: "Wheat flour, Grated coconut, Salt, Water, Oil",
        image: "https://www.sidechef.com/recipe/5a10d1ae-8a69-43e2-b95d-4db53f572a52.jpg?d=1408x1120",
        price: "LKR 100"
    },
    { 
        name: "Fish Patis",
        displayName: "Fish Patis </br> <b style='font-size: 0.8em;'>LKR 250</b>", 
        description: "Fish Patis are savory Sri Lankan pastries filled with a spicy fish mixture, wrapped in dough, and deep-fried or baked. They are a popular snack or party food.",
        ingredients: "Canned or fresh fish (tuna or mackerel), Potato, Onion, Green chilies, Curry leaves, Chili powder, Salt, Pepper, Pastry dough, Oil for frying",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5zdSpE_aFs72PaUdVm9O1388Gax5F3MXL9w&s",
        price: "LKR 250"
    },
    { 
        name: "Parota",
        displayName: "Parota </br> <b style='font-size: 0.8em;'>LKR 180</b>", 
        description: "Parota is a flaky, layered Indian flatbread made with all-purpose flour and cooked on a griddle. It pairs well with curries and chutneys.",
        ingredients: "All-purpose flour (maida), Salt, Water, Oil or ghee",
        image: "https://i0.wp.com/cookingfromheart.com/wp-content/uploads/2017/09/Ceylon-Parotta-5.jpg?resize=683%2C1024&ssl=1",
        price: "LKR 180"
    },
    { 
        name: "Vegetable Roti",
        displayName: "Vegetable Roti </br> <b style='font-size: 0.8em;'>LKR 120</b>", 
        description: "Vegetable Roti is a Sri Lankan stuffed flatbread filled with a spiced vegetable mixture, often shaped into triangles and cooked on a griddle.",
        ingredients: "Wheat flour, Potato, Carrots, Onion, Green chilies, Curry powder, Salt, Water, Oil",
        image: "https://i.pinimg.com/736x/82/58/bc/8258bc64a33abe42c95d2a5e92310fbe.jpg",
        price: "LKR 120"
    }
];



const menuList = document.getElementById("menu-list");

// Function to create and display the popup
function showDishPopup(index) {
    const dish = menu[index];

    // Check if an existing popup is present
    let popup = document.getElementById("dish-popup");
    if (!popup) {
        popup = document.createElement("div");
        popup.id = "dish-popup";
        popup.classList.add("popup");
        document.body.appendChild(popup);
    }

    // Set popup content
    popup.innerHTML = `
        <span class="close-btn" onclick="hideDishPopup()">&times;</span>
        <img src="${dish.image}" alt="${dish.name}" class="popup-image">
        <h3>${dish.name}</h3>
        <p>${dish.description}</p>
        <br>
        <p><strong>Ingredients:</strong> ${dish.ingredients}</p>
        <br>
        <p><strong>Price:</strong> ${dish.price}</p>
    `;


    // Add event listener to close the popup when clicking outside
    document.addEventListener("click", (event) => {
        const popup = document.getElementById("dish-popup");
        const overlay = document.getElementById("popup-overlay");
        const translator = document.getElementById("google_translate_element");
        // Ensure the click is outside both the popup and menu list
        if (!popup.contains(event.target) && event.target !== popup && !menuList.contains(event.target)) {
            hideDishPopup();
        }
        
    });

    popup.style.display = "flex";

    // Add blur effect to Google Translate when popup is active
    document.body.classList.add("popup-active");
    
}



// Function to hide the popup
function hideDishPopup() {
    const popup = document.getElementById("dish-popup");
    if (popup) {
        popup.style.display = "none";
    }

    // Remove blur effect
    document.body.classList.remove("popup-active");

}

// Generate menu dynamically
menu.forEach((dish, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<img src="${dish.image}" alt="${dish.name}" class="menu-image"><p>${dish.displayName}</p>`;
    li.addEventListener("click", () => showDishPopup(index));
    menuList.appendChild(li);
});


