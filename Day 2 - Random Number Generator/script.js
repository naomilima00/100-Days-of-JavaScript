const number = document.querySelector(".number");
const btn = document.querySelector(".generate");

const generateNumber = () =>{
  //generate no. bt 1 - 100
  const randomNumber = Math.floor(Math.random() * 100 + 1);
  number.innerHTML = randomNumber;
}

btn.addEventListener("click", generateNumber);

generateNumber();

// const rand = Math.floor(Math.random() * 10);
//   // Math.floor is rounded down to nearest into
// console.log(rand);