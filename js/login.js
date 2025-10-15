//    logIn

var emailLogIn = document.getElementById("emailInputlogin");
var passwordLogIn = document.getElementById("passwordInputlogin");
var logInBtn = document.querySelector("button");
var spanMsg = document.querySelector("span");

var usersList = [];
if (localStorage.getItem("userContainer") !== null) {
  var usersList = JSON.parse(localStorage.getItem("userContainer"));
}

logInBtn.addEventListener("click", function () {
  if (emailLogIn.value !== "" && passwordLogIn.value !== "") {
    if (checkEmailPassword(emailLogIn.value, passwordLogIn.value)) {
      spanMsg.classList.replace("d-block", "d-none");
      location.href = "welcome.html";
    } else {
      spanMsg.classList.replace("d-none", "d-block");
      spanMsg.classList.replace("text-success", "text-danger");

      spanMsg.innerHTML = "incorrect email or password";
    }
  } else {
    spanMsg.classList.replace("d-none", "d-block");
    spanMsg.classList.replace("text-success", "text-danger");
    spanMsg.innerText = "All inputs is required";
  }
});

function checkEmailPassword(email, password) {
  var flag;
  if (localStorage.getItem("userContainer") !== null) {
    for (var i = 0; i < usersList.length; i++) {
      if (
        usersList[i].email === email.toLowerCase() &&
        usersList[i].password === password
      ) {
        localStorage.setItem("name", usersList[i].name);
        flag = true;
      }
    }
  }

  if (flag) return true;
  else return false;
}
