var welcomeMsg = document.querySelector("p");

welcomeMsg.innerHTML += `  ${localStorage.getItem("name")} `;

var name = localStorage.getItem("name");

logOutBtn = document.querySelector("button");
logOutBtn.addEventListener("click", function () {
  location.href = "login.html";
});
