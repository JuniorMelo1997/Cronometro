
        var centesimos = 0;
        var cent;
        var segundos = 0;
        var sec;
        var minutos = 0;
        var min;
        var horas = 0;
        var hor;
        var ativo;
        document.getElementById("parar").disabled = true;
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
                sec = '0' + segundos;
            else
                sec = segundos;

            if(minutos < 10)
                min = '0' + minutos;
            else
                min = minutos;
            
            if(horas < 10)
                hor = '0' + horas;
            else
                hor = horas;

            document.getElementById('mostrador').innerHTML = `${hor}:${min}:${sec}:${cent}`; //mostra o cronometro
        }

        function parcial(){ //função que mostra a parcial numa paragrafo logo abaixo do resultado principal
            document.getElementById('parcial').innerHTML += 'Parcial: ' + document.getElementById('mostrador').innerHTML + '<br/>';
        }
        function zerar(){   //função responsável por zerar o cronometro com ele ativo ou parado. Zera as parciais também
            horas = 0;
            minutos = 0;
            segundos = 0;
            centesimos = -1;
            document.getElementById('parcial').innerHTML = '';
            cronometro();
        }