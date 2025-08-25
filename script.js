// =======================
// Part 1: Variables & Conditionals
// =======================
let studentName = "Patrick Rimomo";
let course = "Computer Programming (CDACC)";
let year = 2;

if (year === 2) {
  console.log(studentName + " is in Year " + year + " of " + course + ".");
} else {
  console.log(studentName + " is not in Year 2.");
}

// =======================
// Part 2: Custom Functions
// =======================
function introduce() {
  console.log("My name is " + studentName + " and I study " + course + ".");
}

function calculateAllowance(basic, bonus) {
  return basic + bonus;
}

// Call functions
introduce();
console.log("Monthly allowance: " + calculateAllowance(5000, 1500));

// =======================
// Part 3: Loops
// =======================

// For loop example
for (let i = 1; i <= 3; i++) {
  console.log("Looping through project #" + i);
}

// While loop example
let count = 1;
while (count <= 2) {
  console.log("While loop count: " + count);
  count++;
}

// =======================
// Part 4: DOM Interactions
// =======================

// 1. Change text when button is clicked
document.getElementById("changeTextBtn").addEventListener("click", function() {
  document.getElementById("info").textContent = "Updated by " + studentName + " - Rimosto!";
});

// 2. Toggle color on title
document.getElementById("toggleColorBtn").addEventListener("click", function() {
  document.getElementById("main-title").classList.toggle("highlight");
});

// 3. Add new project to the list
document.getElementById("addItemBtn").addEventListener("click", function() {
  let newItem = document.createElement("li");
  newItem.textContent = "Student Management System (By Rimomo Investment)";
  document.getElementById("list").appendChild(newItem);
});
