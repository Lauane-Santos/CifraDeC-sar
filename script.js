 var values = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
            var key = +document.getElementById("key").innerHTML;

            function menos() {
                if(key > 1) {
                    key--;
                    document.getElementById("key").innerHTML = key;
                }
            }

            function mais() {
                if(key < 25) {
                    key++;
                    document.getElementById("key").innerHTML = key;
                }
            }

            function criptografar() {
                var input = document.getElementById("input").value.toUpperCase();
                var result = "";

                for(var i = 0; i<input.length; i++){ 
                    var posicaoDaLetraNoAlfabeto = input.charCodeAt(i)-64; 
                    var letraComDeslocamento = (posicaoDaLetraNoAlfabeto + key) % 26; 
                    letraComDeslocamento = letraComDeslocamento == 0 ? 26 : letraComDeslocamento;
                    result += values[letraComDeslocamento-1]; 
                }

                document.getElementById("output1").innerHTML = result;
            }
function descriptografar() {
                var input = document.getElementById("input").value;


                document.getElementById("output2").innerHTML = input;
            }