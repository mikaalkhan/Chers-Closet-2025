function showMessage() {
    document.getElementById("message").innerText = "Hello, JavaScript is working!";
    console.log("Button Clicked!")
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

const hatvalues = [
    {color : "Blue", type: "cap", formal: "false", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\Blue Hat 1.avif"}
    {color : "ivory", type: "sunhat", formal: "true", image: },
    {color : "black", type: "cap", formal: "true", image: }
]

const shirtvalues = [
    {color : "white", type: "tshirt", formal: "false", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\white_T_1.jpg" },
    {color : "ivory", type: "tshirt", formal: "false", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\Ivory-tshirt.webp"},
    {color : "purple", type: "tshirt", formal: "false", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\purple tshirt 1.avif"},
    {color : "brown", type: "tshirt", formal: "false", image: },
    {color : "black", type: "tshirt", formal: "false", image: },
    {color : "white", type: "collared", formal: "true", image: }
]

const jacketvalues = [
    {color : "Black", type: "jacket", formal: "false", image:"C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\Bomber Jacket (black) 1.webp" },
    {color : "blue", type: "sweatter", formal: "true", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\sweatter-navy-1.avif" },
    {color : "brown", type: "sweatshirt", formal: "false", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\brown sweatshirt 1.avif"},
    {color : "blue", type: "denim", formal: "false", image: 
    {color : "ivory", type: "quarterzip", formal: "false", image: 
]

const pantvalues = [
    {color : "blue", type: "jeans", formal: "false", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\Light Jeans 1.avif" },
    {color : "ivory", type: "ribbed", formal: "false", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\Ivory-pants-ribbed.webp" },
    {color : "blue", type: "jeans", formal: "false", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\Light Jeans 1.avif"},
    {color : "grey", type: "jeans", formal: "false", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\grey jeans 1.avif"},
    {color : "grey", type: "slacks", formal: "true", image: },
    {color : "black", type: "slacks", formal: "true", image: },
    {color : "ivory", type: "shorts", formal: "false", image: },
    {color : "brown", type: "shorts", formal: "false", image: },
    {color : "blue", type: "shorts", formal: "false", image: }
]

const shoesvalues = [
    {color : "white", type: "sambas", formal: "false", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\shoes samba white and blue.avif" },
    {color : "ivory", type: "sambas", formal: "false", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\shoes-white&blue-2.webp"},
    {color : "brown", type: "oxford", formal: "true", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\brown dress shoes.jpg" },
    {color : "brown", type: "sambas", formal: "false", image: },
    {color : "brown", type: "cowboy boots", formal: "false", image: },
    {color : "black", type: "sambas", formal: "false", image: }
    ]

let Hatcycle = 0;
let Jacketcycle = 0;
let Shirtcycle = 0;
let Pantscycle = 0;
let Shoescycle = 0;
function pickRandomNumber() {
    Hatcycle = getRandomInt(0, hatvalues.length)
    Jacketcycle = getRandomInt(0, jacketvalues.length)
    Shirtcycle = getRandomInt(0, shoesvalues.length)
    Pantscycle = getRandomInt(0, pantvalues.length)
    Shoescycle = getRandomInt(0, shoesvalues.length)
    showImage("Hatid")
    showImage("Jacketid")
    showImage("Shirtid")
    showImage("Pantid")
    showImage("Shoeid")

}


function showImage(accoryId) {
    // const imageURLs = Clothingitemsvalues.map(clothes => clothes.image);
    if (accoryId == "Hatid") {
        document.getElementById(accoryId).src = hatvalues[Hatcycle].image;
    } else if (accoryId == "Jacketid") {
        document.getElementById(accoryId).src = jacketvalues[Jacketcycle].image;
    } else if (accoryId == "Shirtid") {
        document.getElementById(accoryId).src = shirtvalues[Shirtcycle].image;
    } else if (accoryId == "Pantid") {
        document.getElementById(accoryId).src = pantvalues[Pantscycle].image;
    } else if (accoryId == "Shoeid") {
        document.getElementById(accoryId).src = shoesvalues[Shoescycle].image;
    }
    document.getElementById(accoryId).style.display = "block"
}


 function insertDiv() {
     // Create a new div
    let newDiv = document.createElement("div");
    newDiv.className = "image-box-shirt";

    document.getElementById("container").appendChild(newDiv);
    }

