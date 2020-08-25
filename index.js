function handleclick() {
  var buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}

var numberButtons = document.querySelectorAll(".drum").length; //calcular el numero de de botones que hay con la clase drum

for (var i = 0; i < numberButtons; i++) { // ciclo for que itera en cada boton
  document.querySelectorAll(".drum")[i].addEventListener("click", handleclick); //determinar los eventos click que suceden en cada boton
}

document.querySelector("body").addEventListener("keydown", function (event) { //determinar los eventos realizados al presionar una tecla del teclado
  makeSound(event.key); //reproducir sonido determinando que boton se presiono a partir de la funcion makeSound
  buttonAnimation(event.key); // reproducir animacion determinando que boton se presiono a partir de la funcion buttonAnimation
});

function makeSound(key) { 
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    default:
      console.log(buttonInnerHTML);
      break;
  }
}
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
