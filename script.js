const bulb = document.getElementById("bulb");
const toggleButton = document.getElementById("toggleButton");
const codeDisplay = document.getElementById("codeDisplay");

const codes = [
  "Just one small positive thought in the morning can change your whole day.",
  "Opportunities don't happen, you create them.",
  "Love your family, work super hard, live your passion.",
  "It is never too late to be what you might have been",
  "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.",
  "Success usually comes to those who are too busy looking for it."
];

let codeIndex = -1;

function toggleBulb() {
  codeIndex = (codeIndex + 1) % codes.length;
  if (bulb.classList.contains("on")) {
    bulb.classList.remove("on");
    codeDisplay.innerHTML = "";
  } else {
    bulb.classList.add("on");
    codeDisplay.innerHTML = codes[codeIndex];
  }
}

toggleButton.addEventListener("click", toggleBulb);
