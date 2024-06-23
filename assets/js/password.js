//--------------password change
const passForm = document.getElementById("passForm");
const namePass = document.getElementById("namepass");
const passСhange = document.getElementById("passchange");
const buttChangePass = document.getElementById("button1");

//--------------password change
function changePass(event) {
  event.preventDefault();
  const newPassword = passСhange.value.trim();
  console.log(newPassword);
  if (newPassword) {
    console.log("Успешно изменен");
  } else {
    alert("заполните поле");
  }
}
passForm.addEventListener("submit", changePass);
