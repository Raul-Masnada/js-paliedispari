function isPalindroma(parola){
    var isWordPalindroma = true;
    for (let i = 0; i < parola.length; i++) {
        for (let j = (parola.length - 1); j >= 0 ; j--) {
            console.log(parola[i] + ' == ' +  parola[j] + ' ?');

            if (parola[i] == parola[j]) {
                console.log('Sì');
            } else {
                console.log('No');
                isWordPalindroma = false;
                break;
            }
            i++;
        }
        if (!isWordPalindroma) {
            break;
        }
    }

    if (isWordPalindroma) {
        console.log('vero');
    }
    else{
        console.log('falso');
    }
}

var parola = prompt('Inserisci una parola').toLowerCase();
console.log('Parola inserita: ' + parola);
isPalindroma(parola);
