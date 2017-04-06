// Sondre Gjellestad | 2017

/*
Funksjonene i dette skriptet holder styr på elementene som skal lastes inn.
Grunnen til at jeg har en egen funksjon for dette er at det muliggjør
innlasting mens andre deler av skriptet kjører.
*/


// Definerer antall elementer hver side skal laste inn.
var loadPage1 = 3;
var loadPage2 = 0;
var loadPage3 = 0;

// Starter innlasting av filer
function loadFiles(pageId_) {
  pageId = pageId_;
  ready = false;
  loadcount = 0;
  if (pageId == 1) {
    car = loadImage('img/car.png', checkload);
    sign = loadImage('img/sign.png', checkload);
    carSound = loadSound('sound/car-sound.mp3', checkload);
  } else if (pageId == 2) {} else if (pageId == 3) {}
}

// Sjekker om alle elementene er lastet inn.
function checkload() {
  loadcount++;
  if ((pageId == 1 && loadcount == loadPage1) || (pageId == 2 && loadcount == loadPage2) || (pageId == 3 && loadcount == loadPage3)) {
    ready = true;
  }
}