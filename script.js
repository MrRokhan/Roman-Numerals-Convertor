const converBtn = document.getElementById("convert");
const entrNumb = document.getElementById("numbers");
const output = document.getElementById("output"); 

function alertBttn() {  
    const numb = Number(entrNumb.value); // Get value inside the function

    if (entrNumb.value === "") { // Check for empty input
        output.textContent = "Please enter a valid number";
        return;
    }

    minmax(numb); // Call minmax after validation
}

function minmax(numb) { 
    if (numb < 1) {
        output.textContent = "Please enter a number greater than or equal to 1"; 
    } else if (numb >= 4000) {
        output.textContent = "Please enter a number less than or equal to 3999";
    } else {
        // If the number is valid, convert it to Roman numeral
        const romanNumeral = convertToRoman(numb);
        output.textContent = `Roman Numeral: ${romanNumeral}`; // Display Roman numeral
    }
}

const romanNumerals = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" }
];

function convertToRoman(numb) {
    let result = "";
  
    // Loop through the Roman Numeral map
    for (let i = 0; i < romanNumerals.length; i++) {
        while (numb >= romanNumerals[i].value) {
            result += romanNumerals[i].symbol; // Add the symbol
            numb -= romanNumerals[i].value;   // Subtract the value
        }
    }
  
    return result;  // Return the final Roman numeral string
}

converBtn.addEventListener("click", alertBttn);
