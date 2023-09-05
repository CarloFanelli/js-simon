/* Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina! */


// .getTime transform all in Ms
const timeNowMS = new Date().getTime();

// finish date
const expirationTime = new Date('2023, 9 , 5, 9:30:00').getTime();

console.log(timeNowMS);

console.log(expirationTime);

const timeRemaining = timeNowMS - expirationTime;

console.log(timeNowMS);