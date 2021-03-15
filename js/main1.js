 var player = prompt("scegli pari o dispari");
      var numPlayer = parseInt(prompt("scegli un numero tra 1 a 5"));
      var numPc = Math.floor(Math.random() * (6 - 1) + 1);
      var pair = "pari".toLowerCase()

      function isPair(num1 , num2) {

        var sum = num1 + num2;
        console.log(numPlayer,numPc,sum);
        if (sum % 2 == 0) {

          if (player == pair) {

            console.log("Hai vinto");
          } else {

            console.log("Hai perso");
          }
        } else {

          if (player == pair) {

            console.log("hai perso");
          } else {

            console.log("hai vinto");
          }
        }
      }

      isPair(numPlayer,numPc);
