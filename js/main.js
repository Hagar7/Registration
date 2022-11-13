
//variable for sign up page
let signName = document.getElementById('signName');
let signEmail = document.getElementById('signEmail');
let signPassword = document.getElementById('signPassword');
let signBtn = document.getElementById('signBtn');
let allInputs = document.getElementsByClassName('form-control')
let msgName = document.getElementById('msgName');
let msgName2 = document.getElementById('msgName2');
let msgEmail = document.getElementById('msgEmail');
let msgEmail2 = document.getElementById('msgEmail2');
let msgPass = document.getElementById('msgPass');
let modalTest = document.getElementById('modalTest');
let paraTest = document.getElementById('paraTest');
 

var users =[];

if(JSON.parse(localStorage.getItem('usersList')) != null){
    users = JSON.parse(localStorage.getItem('usersList'))    
}


signName.addEventListener('keyup',checkUserRegex)
signEmail.addEventListener('keyup',checkEmailRegex)
signPassword.addEventListener('keyup',checkPassRegex)


// name validation
function checkUserRegex(){
  let userRegex = /(^[a-zA-Z\s]{0,20}[a-zA-Z]$)/;
  if(userRegex.test(signName.value)) {
      signName.classList.add('is-valid');
      signName.classList.remove('is-invalid');
      msgName.classList.add('d-none');
  }
  else {
      signName.classList.add('is-invalid');
      signName.classList.remove('is-valid');
      msgName.classList.remove('d-none');
  }
}

// email validation
function checkEmailRegex() {
  let emailRegex =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(emailRegex.test(signEmail.value)) {
      signEmail.classList.add('is-valid') 
      signEmail.classList.remove('is-invalid');
      msgEmail.classList.add('d-none');
  }
  else {
      signEmail.classList.add('is-invalid');
      signEmail.classList.remove('is-valid');
      msgEmail.classList.remove('d-none');
  }
}

//password validation
function checkPassRegex() {
//To check a password between 7 to 15 characters which contain at least one numeric digit and a special character
let passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;  
if( passwordRegex.test(signPassword.value)) {
    signPassword.classList.add('is-valid') 
    signPassword.classList.remove('is-invalid');
    msgPass.classList.add('d-none');
}
else {
    signPassword.classList.add('is-invalid');
    signPassword.classList.remove('is-valid');
    msgPass.classList.remove('d-none');
}
}

//add
signBtn.addEventListener('click',function() {
  addUser() 
  clearForm()
});


function addUser() {
  const dublicateUser = users.find(function(obj){
   return obj.name == signName.value;
  })
  if(dublicateUser){  //true
      signName.classList.add('is-invalid');
      signName.classList.remove('is-valid');
      msgName2.classList.remove('d-none');
  }
  else{ //name mesh mawgod
      const dublicateUser = users.find(function(obj){
          return obj.email == signEmail.value;
         })
         if(dublicateUser){  //email mawgod
          signEmail.classList.add('is-invalid') 
          signEmail.classList.remove('is-valid');
          msgEmail2.classList.remove('d-none');
         }
         else{ //mafesh name wla email so add user
          
      var user = {
          name:signName.value,
          email:signEmail.value,
          password:signPassword.value
        }
        users.push(user);
        localStorage.setItem('usersList',JSON.stringify(users));
        successMsg.classList.remove('d-none')
        successMsg.innerHTML = "your account has been created";
        setTimeout(function(){
          localStorage.setItem("isLogged","true");
          location.href="home.html";
        },1500)
         }
  }
}

//clear form after adding

function clearForm() {
  for(var i=0;i< allInputs.length;i++){
      allInputs[i].value = "";
   }
}






