var users = JSON.parse(localStorage.getItem("usersList"));
console.log(users);

function validateForm() {
    var email = document.forms["RegForm"]["EMail"];
    var password = document.forms["RegForm"]["Password"];
  
    if (email.value == "") {
      window.alert("Please enter a valid e-mail address.");
      return false;
    }
  
    if (password.value == "") {
      window.alert("Please enter your password");
      return false;
    }

    if(users.some(user=>(user.email === email.value && user.password ===  password.value))){
        alert("User Found successfully");
        return true;
    }else{
        alert("User Not Found");
        return false;
    }

  }