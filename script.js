
var navbtn = document.querySelectorAll(".navbtn");
var loginbtn=navbtn[0];
var signupbtn=navbtn[1]; 
var closebtns =document.querySelectorAll(".modal .cancel");
var closebtnlogin=closebtns[0]; 
var closebtnsignup=closebtns[1]; 
//sign in form : 
var signupmodal = document.getElementById("signup-modal");

function openSignupForm() {
  signupmodal.style.display = "block";
  //disable body scrolling when form is open
  body.style.overflow = "hidden" ; 
}
signupbtn.addEventListener("click",openSignupForm);
closebtnsignup.addEventListener("click",closeForm);
// login form : 

var loginmodal = document.getElementById("login-modal");
var body = document.querySelector("body"); 
var closebtnlogin =document.querySelector(".modal .cancel");
function openLoginForm() {
  loginmodal.style.display = "block";
  //disable body scrolling when form is open
  body.style.overflow = "hidden" ; 
}
loginbtn.addEventListener("click",openLoginForm);



// When the user clicks anywhere outside of the loginmodal, close it

function closeForm(){
		loginmodal.style.display = "none";
		signupmodal.style.display = "none";
	    //enable body scrolling when form is closed
	    body.style.overflow = "auto" ;
}
closebtnlogin.addEventListener("click", closeForm);
window.addEventListener("click",function(event){
	if (event.target == loginmodal || event.target == signupmodal ) {
	    loginmodal.style.display = "none";
	    signupmodal.style.display = "none";
	    //enable body scrolling when form is closed
	    body.style.overflow = "auto" ;
	  }
})