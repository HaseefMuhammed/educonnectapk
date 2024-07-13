// function loginAdmin(){
//   let username = document.getElementById("inputUserName").value;
//   let password = document.getElementById("inputPassword").value;

//   if(username == "admin" && password == "eb.pmsa@123"){
//       window.location.href = "index.html";
//   }else{
//       alert("Invalid username or password");
//   }
// }
// function loginAdmin() {
//   // Add your login logic here
//   alert("Login button clicked!");
// }


    document.addEventListener('scroll', function() {
    var audio = document.getElementById('background-music');
    if (audio.paused) {
        audio.play();
    }
});


// ANimation scroll reveal js

ScrollReveal().reveal('.anm1', {
    scale: 0.85, duration: 1000
},);

ScrollReveal().reveal('.flip', {
    rotate: {
        x: 20,
        z: 20
    }
});
