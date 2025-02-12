const menu = [
    { 
        name: "Parippu Vada", 
        description: "A crispy and delicious lentil fritter made from yellow split peas and spices.",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh8jSbPTwGBGlh1y5GQyZS2C_Of6oV5qSdxrfyIviyIP4iae-_S412kZ6wcBOJE7f3gfVfvKaZvwjXHZm8kJ7Z5haTqjlOEJQAu3CpVsSi-oOt5XxrrKZOw_m2bSsWDkfAIjIB0cukSeXoJgn4JuzZWDzo9sDcOM_KJkS6uciIeunc6UelytU6KOIQnBg/s6720/_O2A1320-1.jpg"
    },
    { 
        name: "Ulundu Vada", 
        description: "A fluffy and crispy urad dal snack, best enjoyed with chutney or sambar.",
        image: "https://www.sharmispassions.com/wp-content/uploads/2011/01/MeduVadai3.jpg"
    },
    { 
        name: "Vegetable Rolls", 
        description: "Crispy Sri Lankan rolls filled with a spicy vegetable mixture.",
        image: "https://static.showit.co/800/D0xOCAJuS2-072g0uUIOyQ/shared/mutton_rolls.jpg"
    },
    { 
        name: "Coconut Roti", 
        description: "A hearty Sri Lankan flatbread made with grated coconut and wheat flour.",
        image: "https://www.sidechef.com/recipe/5a10d1ae-8a69-43e2-b95d-4db53f572a52.jpg?d=1408x1120"
    },
    { 
        name: "Fish Patis", 
        description: "Savory Sri Lankan pastries filled with a spicy fish mixture.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5zdSpE_aFs72PaUdVm9O1388Gax5F3MXL9w&s"
    },
    { 
        name: "Parota", 
        description: "A flaky, layered Indian flatbread, perfect with curries.",
        image: "https://i0.wp.com/cookingfromheart.com/wp-content/uploads/2017/09/Ceylon-Parotta-5.jpg?resize=683%2C1024&ssl=1"
    },
    { 
        name: "Vegetable Roti", 
        description: "A stuffed Sri Lankan flatbread filled with a spiced vegetable mixture.",
        image: "https://i.pinimg.com/736x/82/58/bc/8258bc64a33abe42c95d2a5e92310fbe.jpg"
    }
];

const menuList = document.getElementById("menu-list");
const dishDetails = document.getElementById("dish-details");
const dishName = document.getElementById("dish-name");
const dishImage = document.getElementById("dish-image");
const dishDescription = document.getElementById("dish-description");

menu.forEach((dish, index) => {
    const li = document.createElement("li");
    li.textContent = `${dish.name}`;
    li.addEventListener("click", () => showDishDetails(index));
    menuList.appendChild(li);
});

function showDishDetails(index) {
    const dish = menu[index];
    dishName.textContent = dish.name;
    dishImage.src = dish.image;
    dishImage.alt = `Image of ${dish.name}`;
    dishDescription.textContent = dish.description;
    dishDetails.classList.remove("hidden");
}
