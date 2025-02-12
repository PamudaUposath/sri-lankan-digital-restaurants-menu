const menu = [
    { 
        name: "Parippu Vada", 
        description: "Parippu wade is a popular Sri Lankan snack of fried lentil patties. It's a common street food and tea-time snack, and it's also vegan, vegetarian, gluten-free, and low-carb.\n\nIngredients:\n- Soaked yellow split peas (chana dal)\n- Curry leaves\n- Onion\n- Green chilies\n- Chili flakes\n- Salt\n- Cumin seeds\n- Bread flour\n- Coconut oil",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh8jSbPTwGBGlh1y5GQyZS2C_Of6oV5qSdxrfyIviyIP4iae-_S412kZ6wcBOJE7f3gfVfvKaZvwjXHZm8kJ7Z5haTqjlOEJQAu3CpVsSi-oOt5XxrrKZOw_m2bSsWDkfAIjIB0cukSeXoJgn4JuzZWDzo9sDcOM_KJkS6uciIeunc6UelytU6KOIQnBg/s6720/_O2A1320-1.jpg",
        price: "LKR 150"
    },
    { 
        name: "Ulundu Vada", 
        description: "Ulundu Vada is a South Indian deep-fried snack made from urad dal (black gram). It has a crispy exterior and a soft, fluffy interior, often served with chutney or sambar.\n\nIngredients:\n- Urad dal (black gram)\n- Onion\n- Green chilies\n- Curry leaves\n- Black pepper\n- Cumin seeds\n- Salt\n- Oil for frying",
        image: "https://www.sharmispassions.com/wp-content/uploads/2011/01/MeduVadai3.jpg",
        price: "LKR 120"
    },
    { 
        name: "Vegetable Rolls", 
        description: "Vegetable rolls are Sri Lankan-style crispy rolls filled with a spiced vegetable mixture, coated in breadcrumbs, and deep-fried. They are a popular street food and tea-time snack.\n\nIngredients:\n- Potatoes\n- Carrots\n- Leeks\n- Onion\n- Green chilies\n- Curry powder\n- Pepper\n- Salt\n- Breadcrumbs\n- Flour batter\n- Oil for frying",
        image: "https://static.showit.co/800/D0xOCAJuS2-072g0uUIOyQ/shared/mutton_rolls.jpg",
        price: "LKR 200"
    },
    { 
        name: "Coconut Roti", 
        description: "Coconut Roti is a simple and hearty Sri Lankan flatbread made with grated coconut and flour, often enjoyed with spicy sambols or curries.\n\nIngredients:\n- Wheat flour\n- Grated coconut\n- Salt\n- Water\n- Oil",
        image: "https://www.sidechef.com/recipe/5a10d1ae-8a69-43e2-b95d-4db53f572a52.jpg?d=1408x1120",
        price: "LKR 100"
    },
    { 
        name: "Fish Patis", 
        description: "Fish Patis are savory Sri Lankan pastries filled with a spicy fish mixture, wrapped in dough, and deep-fried or baked. They are a popular snack or party food.\n\nIngredients:\n- Canned or fresh fish (tuna or mackerel)\n- Potato\n- Onion\n- Green chilies\n- Curry leaves\n- Chili powder\n- Salt\n- Pepper\n- Pastry dough\n- Oil for frying",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5zdSpE_aFs72PaUdVm9O1388Gax5F3MXL9w&s",
        price: "LKR 250"
    },
    { 
        name: "Parota", 
        description: "Parota is a flaky, layered Indian flatbread made with all-purpose flour and cooked on a griddle. It pairs well with curries and chutneys.\n\nIngredients:\n- All-purpose flour (maida)\n- Salt\n- Water\n- Oil or ghee",
        image: "https://i0.wp.com/cookingfromheart.com/wp-content/uploads/2017/09/Ceylon-Parotta-5.jpg?resize=683%2C1024&ssl=1",
        price: "LKR 180"
    },
    { 
        name: "Vegetable Roti", 
        description: "Vegetable Roti is a Sri Lankan stuffed flatbread filled with a spiced vegetable mixture, often shaped into triangles and cooked on a griddle.\n\nIngredients:\n- Wheat flour\n- Potato\n- Carrots\n- Onion\n- Green chilies\n- Curry powder\n- Salt\n- Water\n- Oil",
        image: "https://i.pinimg.com/736x/82/58/bc/8258bc64a33abe42c95d2a5e92310fbe.jpg",
        price: "LKR 120"
    }
];



const menuList = document.getElementById("menu-list");
const dishDetails = document.getElementById("dish-details");
const dishName = document.getElementById("dish-name");
const dishImage = document.getElementById("dish-image");
const dishDescription = document.getElementById("dish-description");
const dishPrice = document.getElementById("dish-price");

// Populate the menu list dynamically
menu.forEach((dish, index) => {
    const li = document.createElement("li");
    li.textContent = `${dish.name}`;
    li.addEventListener("click", () => showDishDetails(index));  // Display details when clicked
    menuList.appendChild(li);
});

// Function to display dish details
function showDishDetails(index) {
    const dish = menu[index];
    dishName.textContent = dish.name;
    dishImage.src = dish.image;
    dishImage.alt = `Image of ${dish.name}`;
    dishDescription.textContent = dish.description;
    dishPrice.textContent = dish.price;

    // Remove the "hidden" class to make the details visible
    dishDetails.classList.remove("hidden");
}
