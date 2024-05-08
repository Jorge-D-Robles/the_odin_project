let pw1 = document.querySelector("#password");
let pw2 = document.querySelector("#confirm-password");

let currPw;
let comparePw;
const leftField = document.querySelector(".left-form");
let p = document.createElement("p");
p.textContent = "Passwords do not match.";
p.style.display = "none";
leftField.appendChild(p);
pw1.addEventListener("input", () => {
  currPw = pw1.value;
});
pw2.addEventListener("input", () => {
  comparePw = pw2.value;
  if (currPw != comparePw) {
    p.style.display = "block";
  } else {
    p.style.display = "none";
  }
});
