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
var loadPage4 = 0;

// Starter innlasting av filer
function startLoad(pageId_) {
  pageId = pageId_;
  ready = false;
  loadcount = 0;
  if (pageId == 0) {
    ready = true; // Ingen elementer å laste inn
  } else if (pageId == 1) {
    //ready = true;
    car = loadImage('img/car.png', checkLoad);
    sign = loadImage('img/sign.png', checkLoad);
    carSound = loadSound('sound/car-sound.mp3', checkLoad);
  } else if (pageId == 2) {
    ready = true;
  } else if (pageId == 3) {
    ready = true;
  } else if (pageId == 4) {
    ready = true;
  }
}

// Sjekker om alle elementene er lastet inn.
function checkLoad() {
  loadcount++;
  if ((pageId == 1 && loadcount == loadPage1) || (pageId == 2 && loadcount == loadPage2) || (pageId == 3 && loadcount == loadPage3)) {
    ready = true;
  }
}
