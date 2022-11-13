if(localStorage.getItem("isLogged")){
  location.href = "home.html"
}


//variable for login page
let userEmail = document.getElementById('userEmail');
let userPassword = document.getElementById('userPassword');
let myBtn = document.getElementById('myBtn');
let alertPass = document.getElementById('alertPass')




console.log(userEmail);
console.log(userPassword );




//login page
myBtn.addEventListener('click',function() {

  if(JSON.parse(localStorage.getItem('usersList')) != null){
      users = JSON.parse(localStorage.getItem('usersList'))    
  }
  const userInfo = users.find(function(obj){
      return obj.email == userEmail.value && obj.password == userPassword.value
    })
    console.log(userInfo);
    if(userInfo) { //true
      localStorage.setItem("isLogged","true");
      location.href = "home.html"
    }
    else { //false
        alertPass.classList.remove('d-none')
    }
})