import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
const ramdonGenerate = Array => {
  const randomIndex = Math.floor(Math.random() * Array.length);
  return randomIndex;
};
window.onload = function() {
  const palos = [":diamantes:", ":corazones:", ":picas:", ":tréboles:"];
  const numeros = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const ramdonpalo = palos[ramdonGenerate(palos)];
  console.log(ramdonGenerate(palos));
  console.log(palos.length);
  const ramdonnumero = numeros[ramdonGenerate(numeros)];
  console.log(ramdonnumero);
  console.log("Hello Rigo from the console!");
};
