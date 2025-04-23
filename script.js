
function showMessage() {
    document.getElementById("message").innerText = "Hello, JavaScript is working!";
    console.log("Button Clicked!")
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }


const checkbox = document.getElementById('myCheckbox');
if (checkbox.checked) {
  // Checkbox is checked
  console.log('Checkbox is checked');
} else {
  // Checkbox is not checked
  console.log('Checkbox is not checked');
}

//const checkbox = document.getElementById('myCheckbox');
checkbox.checked = true; // Check the checkbox
checkbox.checked = false; // Uncheck the checkbox
const hatvalues = [
    {color : "blue", type: "cap", formal: "false", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\Blue Hat 1.avif"}
    {color : "ivory", type: "sunhat", formal: "true", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\brown sunhat.jpg"},
    {color : "black", type: "cap", formal: "true", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\black flat cap.webp"}
]

const checkbox = document.getElementById('myCheckbox');
checkbox.addEventListener('change', function() {
  if (this.checked) {
    // Checkbox was checked
    console.log('Checkbox was checked');
  } else {
    // Checkbox was unchecked
    console.log('Checkbox was unchecked');
  }
});

const checkbox = document.getElementById('myCheckbox');
console.log(checkbox.value); // Output: "checkboxValue"

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', function() {
    console.log(this.id, this.checked);
  });
});

const shirtvalues = [
    {color : "white", type: "tshirt", formal: "false", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\white_T_1.jpg" },
    {color : "ivory", type: "tshirt", formal: "false", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\Ivory-tshirt.webp"},
    {color : "purple", type: "tshirt", formal: "false", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\purple tshirt 1.avif"},
    {color : "brown", type: "tshirt", formal: "false", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\brown tshirt.jpg"},
    {color : "black", type: "tshirt", formal: "false", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\black tshirt.webp"},
    {color : "white", type: "collared", formal: "true", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\white collared shirt.webp"}
]

const jacketvalues = [
    {color : "Black", type: "jacket", formal: "false", image:"C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\Bomber Jacket (black) 1.webp" },
    {color : "blue", type: "sweatter", formal: "true", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\sweatter-navy-1.avif" },
    {color : "brown", type: "sweatshirt", formal: "false", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\brown sweatshirt 1.avif"},
    {color : "blue", type: "denim", formal: "false", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\blue denim jacket.webp"},
    {color : "ivory", type: "quarterzip", formal: "false", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\white sweater quarterzip.avif"}
]

const pantvalues = [
    {color : "blue", type: "jeans", formal: "false", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\Light Jeans 1.avif" },
    {color : "ivory", type: "ribbed", formal: "false", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\Ivory-pants-ribbed.webp" },
    {color : "blue", type: "jeans", formal: "false", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\Light Jeans 1.avif"},
    {color : "grey", type: "jeans", formal: "false", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\grey jeans 1.avif"},
    {color : "grey", type: "slacks", formal: "true", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\mens pants formal grey.jpg"},
    {color : "black", type: "slacks", formal: "true", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\black pants formal 1.webp"},
    {color : "ivory", type: "shorts", formal: "true", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\ivory shorts.jpg"},
    {color : "brown", type: "shorts", formal: "false", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\brown shorts.webp"},
    {color : "blue", type: "shorts", formal: "true", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\navy shorts.webp"}
]

const shoesvalues = [
    {color : "white", type: "sambas", formal: "false", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\shoes samba white and blue.avif" },
    {color : "ivory", type: "sambas", formal: "false", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\shoes-white&blue-2.webp"},
    {color : "brown", type: "oxford", formal: "true", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\brown dress shoes.jpg" },
    {color : "brown", type: "sambas", formal: "false", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\brown sambas 2.webp"},
    {color : "brown", type: "cowboy boots", formal: "true", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\brown cowboy boots.webp"},
    {color : "black", type: "sambas", formal: "false", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\black sambas.jpg"}
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
