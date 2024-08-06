const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const textArray = [
  "Web Developer",
  "IT professional",
  "Network specialist",
  "Cloud expert",
  "Student..",
];

let textArrayIndex = 0;
let charIndex = 0;

const erase = () => {
  if (charIndex > 0) {
    cursor.classList.remove("blink");
    typedText.textContent = textArray[textArrayIndex].slice(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 40);
  } else {
    cursor.classList.add("blink");
    textArrayIndex++;
    if (textArrayIndex > textArray.length - 1) {
      textArrayIndex = 0;
    }
    setTimeout(type, 1000);
  }
};

const type = () => {
  if (charIndex <= textArray[textArrayIndex].length - 1) {
    cursor.classList.remove("blink");
    typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 60);
  } else {
    cursor.classList.add("blink");
    setTimeout(erase, 1000);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  type();
});
