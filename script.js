var loginbtn = document.querySelector(".navbtn");
var modal = document.getElementById("login-modal");
var body = document.querySelector("body"); 
var closebtn =document.querySelector(".modal .cancel");
function openForm() {
  modal.style.display = "block";
  //disable body scrolling when form is open
  body.style.overflow = "hidden" ; 

}
loginbtn.addEventListener("click",openForm);



// When the user clicks anywhere outside of the modal, close it


function closeForm(){
		modal.style.display = "none";
	    //enable body scrolling when form is open
	    body.style.overflow = "auto" ;
}
closebtn.addEventListener("click", closeForm);
window.addEventListener("click",function(event){
	if (event.target == modal) {
	    modal.style.display = "none";
	    //enable body scrolling when form is open
	    body.style.overflow = "auto" ;
	  }
})