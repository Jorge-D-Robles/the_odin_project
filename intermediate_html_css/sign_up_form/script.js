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
document.querySelector("#submit-button").addEventListener('click', () => {
    let fname = document.querySelector('#fname').value;
    let lname = document.querySelector('#lname').value;
    let email = document.querySelector('#email').value;
    let number = document.querySelector('#number').value;
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!fname || !lname || !email || !number || !currPw || !comparePw) {
        alert('All fields are required.');
    }
    else if (currPw !== comparePw) {
        alert('Passwords do not match.');
    }
    else if (!re.test(String(email).toLowerCase())){
            alert("Please enter a valid email address.");
    }
    else if (number.length !== 10) {
        alert("Enter a valid phone number, area code + 7 digits.")
    }
    else {
        document.querySelector(".signup-form").submit();
    }

})
