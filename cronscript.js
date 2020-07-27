
        var centesimos = 0;
        var cent;
        var segundos = 0;
        var sec;
        var minutos = 0;
        var min;
        var horas = 0;
        var hor;
        var ativo;
        var contadorparciais = 0;
        document.getElementById("parar").disabled = true;
        document.getElementById('parcial').style.display = "none";

        function iniciar(){ //ativa o cronômetro com setInterval
            ativo = setInterval(cronometro, 10);
            document.getElementById("iniciar").disabled = true;
            document.getElementById("parar").disabled = false;
        }
        function parar(){   //para o cronômetro com clearInterval
            clearInterval(ativo);
            document.getElementById("iniciar").disabled = false;
            document.getElementById("parar").disabled = true;
        }
        function cronometro(){  //Função responsável por executar e mostrar 
            centesimos ++;              //funcionamento do cronometro;
            if(centesimos >= 100){
                centesimos = 0;
                segundos ++;
            }
            if(segundos >= 60){
                minutos ++;
                segundos = 0;
            }
            if(minutos >= 60){
                horas++;
                minutos = 0;
            }

            if(centesimos < 10)         //adiciona 0 antes do digito no cronometro. Ex: faz 7:5 aparecer como 07:05
                cent = '0' + centesimos;
            else
                cent = centesimos;

            if(segundos < 10)
                sec = '0' + segundos + ':';
            else
                sec = segundos + ':';

            if(minutos < 10)
                min = '0' + minutos + ':';
            else
                min = minutos + ':';
            
            if(horas > 10)
                hor = horas + ':';
            else if(horas > 0)
                hor = '0' + horas + ':';
            else   
                hor = '';

            document.getElementById('mostrador').innerHTML = `${hor}${min}${sec}${cent}`; //mostra o cronometro
        }

        function parcial(){ //função que mostra a parcial num select (com scrollbar);
            document.getElementById('parcial').style.display = "block";
            let item = document.createElement("option");
            contadorparciais++;
            item.text = `P${contadorparciais}: ` + document.getElementById('mostrador').innerHTML;
            document.querySelector('select#parciais').appendChild(item);
        }
        function zerar(){   //função responsável por zerar o cronometro com ele ativo ou parado. Zera as parciais também
            horas = 0;
            minutos = 0;
            segundos = 0;
            centesimos = -1;
            var length = document.getElementById('parciais').options.length;
            for (i = length-1; i >= 0; i--) {
                document.getElementById('parciais').options[i] = null;
            }
            document.getElementById('parcial').style.display = "none";
            contadorparciais = 0;
            cronometro();
        }