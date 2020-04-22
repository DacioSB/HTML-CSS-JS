//console.log("Oi mundo!");
//1. Alterar o texto html com JS
//Sempre atrelar a uma classe css
var aparecida = document.querySelector(".titulo");
aparecida.textContent = "Dacinho Nutrição";

//1.0Pegando o valor de um paciente so e fazendo o imc
//2.0 Pegando uma lista de pacientes com querySelectorAll
//Obs.: eu posso tanto informar o dom inteiro com document
//como tambem posso informar so parte como paciente
var pacientes = document.querySelectorAll(".paciente");

//Fazendo for percorrendo a lista de pacientes e fazendo a va-
//lidacao e calculo de imc em cada um deles
for(var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];
    var pacienteImc = paciente.querySelector(".info-imc");
    //Pegando so o textContent do paciente 1: paulo
    var pacientePeso = paciente.querySelector(".info-peso").textContent;
    var pacienteAltura = paciente.querySelector(".info-altura").textContent;
    
    var valida = false;

    if((pacientePeso <= 0) || (pacientePeso >= 1000)){
        valida = true;
        console.log("Peso invalidoo");
        pacienteImc.textContent = "peso invalido";
        //manipular css? cria classe no css
        paciente.classList.add("paciente-invalido");
    }

    if((pacienteAltura) <= 0 || (pacienteAltura >= 3.0)){
        valida = true;
        console.log("Altura invalida");
        pacienteImc.textContent = "altura invalida";
        paciente.classList.add("paciente-invalido");
    }
    
    if(!valida){
        pacienteImc.textContent = calculaIMC(pacientePeso, pacienteAltura);
    }
    
}

function calculaIMC(pacientePeso, pacienteAltura){
    var imc = 0;
    
    imc = (pacientePeso/ (pacienteAltura * pacienteAltura)).toFixed(2);
    return imc;
}



  




