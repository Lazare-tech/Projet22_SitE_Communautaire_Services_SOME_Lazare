function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
// menu 
function categorie(){
    
}

// disparition de carousel et les card au clic sur post
let carousel=document.getElementById("carouselExampleCaptions")
let freelanc_block=document.querySelector(".what_freelance")
let become_freelance=document.querySelector(".become_freelance")
let flex_content=document.querySelector(".flex-container")
let block_regist=document.querySelector(".pos")
// function post(){
//   carousel.style.display="none";
//   freelanc_block.style.display="none"
//   become_freelance.style.display="none"
//   flex_content.style.display="none"
  
// }