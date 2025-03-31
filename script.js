function showMessage() {
    document.getElementById("message").innerText = "Hello, JavaScript is working!";
    console.log("Button Clicked!")
}


const Clothingitemsvalues = [
    {color : "Blue", item: "hat", type: "0", pattern: "false", image: "C:\\Users\\SAAS_User\\Downloads\\Blue Hat 1.avif"},
    {color : "white", item: "tshirt", type: "0", pattern: "false", image: "C:\Users\\SAAS_User\\Downloads\\white_T_1.jpg" },
    {color : "Black", item: "jacket", type: "bmbr", pattern: "false", image: "C:\\Users\\SAAS_User\\Downloads\\Bomber Jacket (black) 1.webp" },
    {color : "Paleblue", item: "pants", type: "jeans", pattern: "false", image: "C:\\Users\\SAAS_User\\Downloads\\Light Jeans 1.avif" },
    {color : "Blue White", item: "shoes", type: "sambas", pattern: "false", image: "C:\\Users\\SAAS_User\\Downloads\\shoes samba white and blue.avif" }
]

function showImage(accoryId) {
    // const imageURLs = Clothingitemsvalues.map(clothes => clothes.image);
    if (accoryId == "Hatid") {
        document.getElementById(accoryId).src = Clothingitemsvalues[0].image;
    } else if (accoryId == "Shirtid") {
        document.getElementById(accoryId).src = Clothingitemsvalues[1].image;
    } else if (accoryId == "Jacketid") {
        document.getElementById(accoryId).src = Clothingitemsvalues[2].image;
    } else if (accoryId == "Shoeid") {
        document.getElementById(accoryId).src = Clothingitemsvalues[3].image;
    } else if (accoryId == "Pantid") {
        document.getElementById(accoryId).src = Clothingitemsvalues[4].image;
    }

    document.getElementById(accoryId).style.display = "block"
}


 function insertDiv() {
     // Create a new div
    let newDiv = document.createElement("div");
    newDiv.className = "image-box";

    let img = document.createElement("img");
    img.src = "C:\\Users\\SAAS_User\\Downloads\\Blue Hat 1.avif".image;

    newDiv.appendChild(img);

    // Append the div to the container
    document.getElementById("container").appendChild(newDiv);
    }

