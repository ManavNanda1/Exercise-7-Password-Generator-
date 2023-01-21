let pass1 = document.querySelectorAll(".psw")
let password1 = document.getElementById("pass1");
let password2 = document.getElementById("pass2");
const fun = [
  "Girls Gone Wireless",
  "Drop It Like It’s Hotspot",
  "The House of Black and WiFi",
  " WiFestores",
  "Useit@yourrisk*0",
  "House of Donald trump",
  "Fight the System",
  "A Router of Ice and Fire",
  " The Whomping Wi-Fi",
  "Pleasewait4sometime",
  " AccessDenied4u",
  " We are Virus",
  " This not For Public",
  " NoWiFi4you",
  "No More Mister WiFi",
  "I Slept With Your WiFi",
  "YouarenotAllowed2Use",
  "YourDogShitsInMyYard",
  "Default",
  "IdontLikey@urass",
  " Traffic Sniffer",
  "NSA Drone #3",
  "Avengers Networks",
  "Homeland Security",
  " Desperate HouseWiFi",
  " internet from Asgard",
  " Networkis2Slow@",
  " Pentagon",
  " TellMyWifiLoveHer",
  " UnprotectedCex@18",
  " zombies_ate_my_neighbor",
  " Dontlook@me",
  "Bill Wi the Science Fi",
  "DoUthinkitsfree$0",
  "TonyStarkNetwork"]
// funny password function
function funny(fun) {
  let pass2 = fun[Math.floor(Math.random() * fun.length + 1)];
  return pass1.textContent = pass2;
}
// super password
function generateP() {
  pass1.value = '';
  let Pass;
  let str =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
    'abcdefghijklmnopqrstuvwxyz0123456789@#$';
  for (let i = 1; i <= 8; i++) {
    let char = Math.floor(Math.random() * str.length + 1);
    Pass = pass1.value += str.charAt(char);
  }

  return Pass;

}
// weak password 
function weak() {
  pass1.value = '';
  let pass3;
  let str1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 1; i <= 6; i++) {
    let char1 = Math.floor(Math.random() * str1.length + 1);
    pass3 = pass1.value += str1.charAt(char1);
  }
  return pass3;
}
// callig weak fun 
function weakpsw() {
  pass1.forEach(pass1 => pass1.textContent = weak());
}
// calling funny func 
function funnypsw() {
  pass1.forEach(pass1 => pass1.textContent =
    funny(fun));
}
function renderpsw() {
  pass1.forEach(pass1 => pass1.textContent =
    generateP());
}


/* light theme */

const toggle = document.getElementById("toggle");

const container = document.querySelector(".container");
const accent = document.querySelector(".text-accent");
const green = document.querySelector("#ran");
const subtitle = document.querySelector("#ran2");

const generator = document.querySelector(".genbtn");


toggle.addEventListener("input", e => {
  isChecked = e.target.checked;

  if (isChecked) {
    container.classList.add("light-theme");
    accent.classList.add("light-theme");
    green.classList.add("light-theme");
    subtitle.classList.add("light-theme");

    generator.classList.add("light-theme");
  } else {
    container.classList.remove("light-theme");
    accent.classList.remove("light-theme");
    green.classList.remove("light-theme");
    subtitle.classList.remove("light-theme");

    generator.classList.remove("light-theme");
  }
});