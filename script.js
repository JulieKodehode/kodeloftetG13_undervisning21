// En asynkron funksjon som returnerer en streng
async function getData() {
  return "Data er hentet!";  // Returnerer en enkel streng "Data er hentet!"
}

// En asynkron funksjon som venter på at getData skal returnere resultatet
async function dataRecived() {
  const data = await getData();  // Bruker 'await' for å vente på at getData skal returnere verdien
  console.log(data);  // Skriver ut verdien av 'data' som er "Data er hentet!"
}

// Denne linjen er kommentert ut, men hvis den var aktiv, ville den kalt dataRecived umiddelbart
//dataRecived();

// Setter en forsinkelse på 3000 millisekunder (3 sekunder) før dataRecived funksjonen blir kalt
setTimeout(dataRecived, 3000);

// Skriver ut en melding til konsollen mens vi venter på resultatet
console.log("Vi venter.....");

// Oppgave 1:
// Sett opp en async funksjon som retunerer en string
// Sett opp en async funskjon som tar i mot den første funksjonen
// Sett opp en setTimeout som bruker 5 sekunder på å vise dataen

//
//

// Async funksjon for å hente og vise brukerdata etter 3 sekunder
async function displayUser() {
  try {
    // Oppretter en Promise som blir løst etter 3 sekunder
    const user = await new Promise((resolve) => {
      setTimeout(function () {
        // Etter 3 sekunder returneres meldingen "Brukerdata er lastet inn!"
        resolve("Brukerdata er lastet inn!");
      }, 3000);
    });

    // Skriver ut meldingen i konsollen (kun synlig i developer console)
    console.log(user);

    // Skaper et nytt HTML-element (h1) for å vise meldingen på nettsiden
    const viewUser = document.createElement("h1");
    viewUser.textContent = user; // Setter tekstinnholdet til "Brukerdata er lastet inn!"
    
    // Legger til det nye h1-elementet øverst på nettsiden
    document.body.prepend(viewUser);
  } catch (error) {
    // Hvis noe går galt (f.eks. feil i Promise), fanges feilen her
    console.error("Error lasting av brukerdata: " + error);
  }
}

// Kaller funksjonen for å hente og vise brukerdataen
displayUser();

// Oppgave 2:
// Lag en async funksjon som bruker try/catch metoden for å gjennomføre koden
// Lag en variabel i try som tar i mot et løfte som blir løst med en setTimeout
// Sett opp at catch gir personlig beskjed og en error om det skjer en feil
