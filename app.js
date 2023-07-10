// An example list of cars for each month
const carsByMonth = {
    january: ["Jaguar", "Jeep", "Jensen"],
    february: ["Ferrari", "Ford", "Fiat"],
    march: ["Maserati", "Mercedes-Benz", "Mitsubishi"],
    april: ["Audi", "Alfa Romeo", "Acura"],
    may: ["Mazda", "Mini", "Mclaren"],
    june: ["Jaguar", "Jeep", "Jensen"],
    july: ["Jaguar", "Jeep", "Jensen"],
    august: ["Audi", "Alfa Romeo", "Acura"],
    september: ["Skoda", "Subaru", "Suzuki"],
    october: ["Opel", "Oldsmobile", "Oshkosh"],
    november: ["Nissan", "Noble", "NSU"],
    december: ["Dacia", "Dodge", "Daewoo"]
  };
  
  // Function to populate the car list for each month
  function populateCarList() {
    for (let month in carsByMonth) {
      const carListElement = document.getElementById(month);
      const cars = carsByMonth[month];
  
      cars.forEach(car => {
        const carElement = document.createElement("p");
        carElement.textContent = car;
        carListElement.appendChild(carElement);
      });
    }
  }
  
  // Call the function to populate the car list on page load
  window.addEventListener("load", populateCarList);
  