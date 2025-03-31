function showMessage() {
    document.getElementById("message").innerText = "Hello, JavaScript is working!";
    console.log("Button Clicked!")
}


const Clothingitemsvalues = [
    {color : "Blue", item: "hat", type: "0", pattern: "false", image: "C:\\Users\\SAAS_User\\Downloads\\Blue Hat 1.avif"},
    {color : "white", item: "tshirt", type: "0", pattern: "false", image: "C:\Users\\SAAS_User\\Downloads\\white_T_1.jpg" },
    {color : "Black", item: "jacket", type: "bmbr", pattern: "false", image: "C:\\Users\\SAAS_User\\Downloads\\Bomber Jacket (black) 1.webp" }
]

function showImage(accoryId) {
    // const imageURLs = Clothingitemsvalues.map(clothes => clothes.image);
    if (accoryId == "Hatid") {
        document.getElementById(accoryId).src = Clothingitemsvalues[0].image;
    } else if (accoryId == "Shirtid") {
        document.getElementById(accoryId).src = Clothingitemsvalues[1].image;
    } else if (accoryId == "Pantid") {
        document.getElementById(accoryId).src = Clothingitemsvalues[2].image;
    }

    document.getElementById(accoryId).style.display = "block"
}




// const imageFiles = [file1, file2, file3]; // Assume these are File objects


