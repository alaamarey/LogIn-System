//    indexed.html

var nameInput = document.getElementById("nameInput");
var emailInput = document.getElementById("emailInput");
var passwordInput = document.getElementById("passwordInput");
var spanMsg = document.querySelector("span");

var signUpBtn = document.querySelector("button");
var usersList = [];

if (localStorage.getItem("userContainer") !== null) {
  usersList = JSON.parse(localStorage.getItem("userContainer"));
}

signUpBtn.addEventListener("click", function () {
  console.log(emailInput.value.toLowerCase());

  signUp();
});

function signUp() {
  var user = {
    name: nameInput.value.trim(),
    email: emailInput.value.toLowerCase().trim(),
    password: passwordInput.value,
  };

  if (
    nameInput.value !== "" &&
    emailInput.value !== "" &&
    passwordInput.value !== ""
  ) {
    if (checkEmail(emailInput.value)) {
      spanMsg.classList.replace("d-none", "d-block");
      spanMsg.classList.replace("text-success", "text-danger");
      spanMsg.innerText = "Email already Exsist ";
    } else {
      spanMsg.classList.replace("d-none", "d-block");
      spanMsg.classList.replace("text-danger", "text-success");
      spanMsg.innerHTML = "Success";

      usersList.push(user);
      localStorage.setItem("userContainer", JSON.stringify(usersList));
    }
  } else {
    spanMsg.classList.replace("d-none", "d-block");
    spanMsg.classList.replace("text-success", "text-danger");
    spanMsg.innerText = "All inputs is required";
  }
}
function checkEmail(email) {
  var flag;

  if (email !== null) {
    if (localStorage.getItem("userContainer") !== null) {
      for (var i = 0; i < usersList.length; i++) {
        if (email.toLowerCase() === usersList[i].email) flag = true;
      }

      if (flag) return true;
      else return false;
    }
  }
}
