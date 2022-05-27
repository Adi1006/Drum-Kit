let noOfDrumBtn=document.querySelectorAll(".drum").length;

for(let i=0;i<noOfDrumBtn;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
       var btnInnerHtml=this.innerHTML;
      makeSound(btnInnerHtml);
      btnAnimation(btnInnerHtml);
    });
}


document.addEventListener("keypress",function(event) {
   makeSound(event.key); 
   btnAnimation(event.key);

});

function makeSound(key){
   switch (key) {
      case "w": var audio=new Audio("Sounds/tom-1.mp3");
               audio.play();
                break;
      case "a": var audio=new Audio("Sounds/tom-2.mp3");
               audio.play();
                break;
      case "s": var audio=new Audio("Sounds/tom-3.mp3");
               audio.play();
                break;
      case "d": var audio=new Audio("Sounds/tom-4.mp3");
               audio.play();
                break;
      case "j": var audio=new Audio("Sounds/snare.mp3");
               audio.play();
                break;
      case "k": var audio=new Audio("Sounds/crash.mp3");
               audio.play();
               break;
      case "l": var audio=new Audio("Sounds/kick-bass.mp3");
               audio.play();
               break;       
      
      default:console.log(btnInnerHtml);
         break;
 }
}


function btnAnimation(currrentKey){
   var active=document.querySelector("."+currrentKey);
   active.classList.add("pressed");

   setTimeout(function() {
      active.classList.remove("pressed")
   }, 100);
}
//  var audio=new Audio("Sounds/tom-1.mp3");
// audio.play();