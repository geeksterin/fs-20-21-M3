function validateForm() {
  var name = document.forms["RegForm"]["Name"];
  var email = document.forms["RegForm"]["EMail"];
  var password = document.forms["RegForm"]["Password"];
  var confirmPassword = document.forms["RegForm"]["Confirm"];

  if (name.value == "") {
    window.alert("Please enter your name.");
    name.focus();
    return false;
  }

  if (email.value == "") {
    window.alert("Please enter a valid e-mail address.");
    email.focus();
    return false;
  }

  if (password.value == "") {
    window.alert("Please enter your password");
    password.focus();
    return false;
  }

  if (confirmPassword.value == "") {
    window.alert("Please enter your password");
    password.focus();
    return false;
  }

  if (password.value === confirmPassword.value) {
    if (register()) {
      window.alert("Registration is done successfully!!!");
      return true;
    } else {
      return false;
    }
  } else {
    window.alert("Password and confirm password should be same");
    return false;
  }

  return true;
}

var users = JSON.parse(localStorage.getItem("usersList"))
  ? JSON.parse(localStorage.getItem("usersList"))
  : [];
console.log(users);
function register() {
  var name = document.forms["RegForm"]["Name"].value;
  var email = document.forms["RegForm"]["EMail"].value;
  var password = document.forms["RegForm"]["Password"].value;
  var confirmPassword = document.forms["RegForm"]["Confirm"].value;

  var newUser = {
    id: Number(new Date()),
    name: name,
    email: email,
    password: password,
    confirmPassword: confirmPassword,
  };

  var userExists = users.some((user) => user.email === newUser.email);
  if (userExists) {
    return new Error({ error: "User exists" });
  } else {
    users.push(newUser);
  }

  var usersString = JSON.stringify(users);
  localStorage.setItem("usersList", usersString);
}
