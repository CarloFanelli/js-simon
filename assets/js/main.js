/* Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina! */


/* // .getTime transform all in Ms
const timeNowMS = new Date().getTime();

// finish date
const expirationTime = new Date('2023, 9 , 6, 9:30:00').getTime();

console.log(timeNowMS);

console.log(expirationTime);

const remainingTime = expirationTime - timeNowMS;

console.log(remainingTime);


function convertMsInTime(remainingTime) {

    if (remainingTime < 1) {

        document.getElementById('time').innerHTML = 'tempo scaduto';

    } else {

        const secondConverted = Math.floor(remainingTime / 1000);

        const remainingS = secondConverted % 60;

        const minutesConverted = Math.floor(secondConverted / 60);

        const remainingM = minutesConverted % 60;

        const hourConverted = Math.floor(minutesConverted / 60);

        const remainingH = hourConverted % 24;

        const daysConverted = Math.floor(hourConverted / 24);

        document.getElementById('time').innerHTML = `${daysConverted} giorni, ${remainingH} ore, ${remainingM} minuti, ${remainingS} secondi`;

    }
} */
const expiringTime = setInterval(function () {

    const timeNowMS = new Date().getTime();

    // finish date
    const expirationTime = new Date('2023, 9 , 6, 9:30:00').getTime();

    //console.log(timeNowMS);

    //console.log(expirationTime);

    const remainingTime = expirationTime - timeNowMS;

    //console.log(remainingTime);

    if (remainingTime < 1) {

        document.getElementById('time').innerHTML = 'tempo scaduto';

        clearInterval(expiringTime);

    } else {

        const secondConverted = Math.floor(remainingTime / 1000);

        const remainingS = secondConverted % 60;

        const minutesConverted = Math.floor(secondConverted / 60);

        const remainingM = minutesConverted % 60;

        const hourConverted = Math.floor(minutesConverted / 60);

        const remainingH = hourConverted % 24;

        const daysConverted = Math.floor(hourConverted / 24);

        document.getElementById('time').innerHTML = `${daysConverted} giorni, ${remainingH} ore, ${remainingM} minuti, ${remainingS} secondi`;

    }



}, 100);

