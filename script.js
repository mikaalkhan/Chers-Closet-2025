document.querySelectorAll('.filter').forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      pickRandomNumber();
    });
  });
  
  function getActiveFilters() {
    const formality = [];
    const temperature = [];
    const color = [];
  
    document.querySelectorAll(".filter").forEach(cb => {
      if (cb.checked) {
        const type = cb.getAttribute("data-type");
        const value = cb.value;
  
        if (type === "formality") formality.push(value);
        if (type === "temperature") temperature.push(value);
        if (type === "color") color.push(value);
      }
    });
  
    return { formality, temperature, color };
  }
  
  
  function filterClothingItems(items) {
    const filters = getActiveFilters();
    return items.filter(item =>
      (filters.formality.length === 0 || filters.formality.includes(item.formal)) &&
      (filters.temperature.length === 0 || filters.temperature.includes(item.temperature)) &&
      (filters.color.length === 0 || filters.color.includes(item.color.toLowerCase()))
    );
  }
  
  function pickRandomNumber() {
    const filteredHats = filterClothingItems(hatvalues);
    const filteredJackets = filterClothingItems(jacketvalues);
    const filteredShirts = filterClothingItems(shirtvalues);
    const filteredPants = filterClothingItems(pantvalues);
    const filteredShoes = filterClothingItems(shoesvalues);
  
    if (
      filteredHats.length === 0 || filteredJackets.length === 0 ||
      filteredShirts.length === 0 || filteredPants.length === 0 || filteredShoes.length === 0
    ) {
      alert("No items match the current filters.");
      return;
    }
  
    Hatcycle = getRandomInt(0, filteredHats.length);
    Jacketcycle = getRandomInt(0, filteredJackets.length);
    Shirtcycle = getRandomInt(0, filteredShirts.length);
    Pantscycle = getRandomInt(0, filteredPants.length);
    Shoescycle = getRandomInt(0, filteredShoes.length);
  
    document.getElementById("Hatid").src = filteredHats[Hatcycle].image;
    document.getElementById("Jacketid").src = filteredJackets[Jacketcycle].image;
    document.getElementById("Shirtid").src = filteredShirts[Shirtcycle].image;
    document.getElementById("Pantid").src = filteredPants[Pantscycle].image;
    document.getElementById("Shoeid").src = filteredShoes[Shoescycle].image;
  
    ["Hatid", "Jacketid", "Shirtid", "Pantid", "Shoeid"].forEach(id => {
      document.getElementById(id).style.display = "block";
    });
  }
  
  const hatvalues = [
    {color : "blue", type: "cap", formal: "false", temperature: "warm", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\Blue Hat 1.avif"},
    {color : "ivory", type: "sunhat", formal: "true", temperature: "warm", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\brown sunhat.jpg"},
    {color : "black", type: "cap", formal: "true", temperature: "cool", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\black flat cap.webp"}
  ];
  
  const shirtvalues = [
    {color : "white", type: "tshirt", formal: "false", temperature: "warm", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\white_T_1.jpg" },
    {color : "ivory", type: "tshirt", formal: "false", temperature: "warm", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\Ivory-tshirt.webp"},
    {color : "purple", type: "tshirt", formal: "false", temperature: "warm", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\purple tshirt 1.avif"},
    {color : "brown", type: "tshirt", formal: "false", temperature: "warm", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\brown tshirt.jpg"},
    {color : "black", type: "tshirt", formal: "false", temperature: "warm", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\black tshirt.webp"},
    {color : "white", type: "collared", formal: "true", temperature: "cool", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\white collared shirt.webp"}
  ];
  
  const jacketvalues = [
    {color : "black", type: "jacket", formal: "false", temperature: "warm", image:"C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\Bomber Jacket (black) 1.webp" },
    {color : "blue", type: "sweatter", formal: "true", temperature: "cool", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\sweatter-navy-1.avif" },
    {color : "brown", type: "sweatshirt", formal: "false", temperature: "warm", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\brown sweatshirt 1.avif"},
    {color : "blue", type: "denim", formal: "false",  temperature: "warm", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\blue denim jacket.webp"},
    {color : "ivory", type: "quarterzip", formal: "false", temperature: "cool", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\white sweater quarterzip.avif"}
  ];
  
  const pantvalues = [
    {color : "blue", type: "jeans", formal: "false", temperature: "warm", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\Light Jeans 1.avif" },
    {color : "ivory", type: "ribbed", formal: "false", temperature: "warm", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\Ivory-pants-ribbed.webp" },
    {color : "blue", type: "jeans", formal: "false", temperature: "cool", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\Light Jeans 1.avif"},
    {color : "grey", type: "jeans", formal: "false", temperature: "cool", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\grey jeans 1.avif"},
    {color : "grey", type: "slacks", formal: "true", temperature: "cool", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\mens pants formal grey.jpg"},
    {color : "black", type: "slacks", formal: "true", temperature: "cool", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\black pants formal 1.webp"},
    {color : "ivory", type: "shorts", formal: "true", temperature: "warm", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\ivory shorts.jpg"},
    {color : "brown", type: "shorts", formal: "false", temperature: "warm", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\brown shorts.webp"},
    {color : "blue", type: "shorts", formal: "true", temperature: "warm", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\navy shorts.webp"}
  ];
  
  const shoesvalues = [
    {color : "white", type: "sambas", formal: "false", temperature: "cool", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\shoes samba white and blue.avif" },
    {color : "ivory", type: "sambas", formal: "false", temperature: "cool", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\shoes-white&blue-2.webp"},
    {color : "brown", type: "oxford", formal: "true", temperature: "cool", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\brown dress shoes.jpg" },
    {color : "brown", type: "sambas", formal: "false", temperature: "cool", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\brown sambas 2.webp"},
    {color : "brown", type: "cowboy boots", formal: "true", temperature: "cool", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\brown cowboy boots.webp"},
    {color : "black", type: "sambas", formal: "false", temperature: "cool", image: "C:\\Users\\SAAS_User\\Documents\\GitHub\\Chers-Closet-2025\\images\\black sambas.jpg"}
  ];
  
  let Hatcycle = 0;
  let Jacketcycle = 0;
  let Shirtcycle = 0;
  let Pantscycle = 0;
  let Shoescycle = 0;
  
  function showImage(accoryId) {
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
    document.getElementById(accoryId).style.display = "block";
  }
  
  function insertDiv() {
    let newDiv = document.createElement("div");
    newDiv.className = "image-box-shirt";
    document.getElementById("container").appendChild(newDiv);
  }
  
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  