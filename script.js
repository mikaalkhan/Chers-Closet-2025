
function showMessage() {
    document.getElementById("message").innerText = "Hello, JavaScript is working!";
    console.log("Button Clicked!")
}



JCheckBox checkBox1 = new JCheckBox("Option 1");
JCheckBox checkBox2 = new JCheckBox("Option 2");
JCheckBox checkBox2 = new JCheckBox("Option 3");
JCheckBox checkBox2 = new JCheckBox("Option 4");
JCheckBox checkBox2 = new JCheckBox("Option 5");
JCheckBox checkBox2 = new JCheckBox("Option 6");
JCheckBox checkBox2 = new JCheckBox("Option 7");

JPanel panel = new JPanel();
panel.add(checkBox1);
panel.add(checkBox2);
panel.add(checkBox3);
panel.add(checkBox4);
panel.add(checkBox5);
panel.add(checkBox6);
panel.add(checkBox7);

checkBox1.addItemListener(new ItemListener() {
    public void itemStateChanged(ItemEvent e) {
        if (e.getStateChange() == ItemEvent.SELECTED) {
            // Checkbox is selected
        } else {
            // Checkbox is deselected
        }
    }
});
if (checkBox1.isSelected()) {
    // Checkbox is selected
} else {
    // Checkbox is deselected
}

checkBox2.addItemListener(new ItemListener() {
    public void itemStateChanged(ItemEvent e) {
        if (e.getStateChange() == ItemEvent.SELECTED) {
            // Checkbox is selected
        } else {
            // Checkbox is deselected
        }
    }
});
if (checkBox2.isSelected()) {
    // Checkbox is selected
} else {
    // Checkbox is deselected
}

checkBox3.addItemListener(new ItemListener() {
    public void itemStateChanged(ItemEvent e) {
        if (e.getStateChange() == ItemEvent.SELECTED) {
            // Checkbox is selected
        } else {
            // Checkbox is deselected
        }
    }
});
if (checkBox3.isSelected()) {
    // Checkbox is selected
} else {
    // Checkbox is deselected
}

checkBox4.addItemListener(new ItemListener() {
    public void itemStateChanged(ItemEvent e) {
        if (e.getStateChange() == ItemEvent.SELECTED) {
            // Checkbox is selected
        } else {
            // Checkbox is deselected
        }
    }
});
if (checkBox4.isSelected()) {
    // Checkbox is selected
} else {
    // Checkbox is deselected
}

checkBox5.addItemListener(new ItemListener() {
    public void itemStateChanged(ItemEvent e) {
        if (e.getStateChange() == ItemEvent.SELECTED) {
            // Checkbox is selected
        } else {
            // Checkbox is deselected
        }
    }
});
if (checkBox5.isSelected()) {
    // Checkbox is selected
} else {
    // Checkbox is deselected
}

checkBox6.addItemListener(new ItemListener() {
    public void itemStateChanged(ItemEvent e) {
        if (e.getStateChange() == ItemEvent.SELECTED) {
            // Checkbox is selected
        } else {
            // Checkbox is deselected
        }
    }
});
if (checkBox6.isSelected()) {
    // Checkbox is selected
} else {
    // Checkbox is deselected
}

checkBox7.addItemListener(new ItemListener() {
    public void itemStateChanged(ItemEvent e) {
        if (e.getStateChange() == ItemEvent.SELECTED) {
            // Checkbox is selected include item as attribute
        } else {
            // Checkbox is deselected - null point
        }
    }
});
if (checkBox7.isSelected()) {
    // Checkbox is selected
} else {
    // Checkbox is deselected
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

const hatvalues = [
    {color : "Blue", type: "0", pattern: "false", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\Blue Hat 1.avif"}
]

const shirtvalues = [
    {color : "white", type: "0", pattern: "false", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\white_T_1.jpg" },
    {color : "ivory", type: "0", pattern: "false", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\Ivory-tshirt.webp"}
]

const jacketvalues = [
    {color : "Black", type: "bmbr", pattern: "false", image:"C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\Bomber Jacket (black) 1.webp" },
    {color : "Navy", type: "swtr", pattern: "false", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\sweatter-navy-1.avif" }
]

const pantvalues = [
    {color : "Paleblue", type: "jeans", pattern: "false", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\Light Jeans 1.avif" },
    {color : "ivory", type: "ribbed", pattern: "false", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\Ivory-pants-ribbed.webp" }
]

const shoesvalues = [
    {color : "Blue White", type: "sambas", pattern: "false", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\shoes samba white and blue.avif" },
    {color : "Blue White", type: "sambas", pattern: "false", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\shoes-white&blue-2.webp"}
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
