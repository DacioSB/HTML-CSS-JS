//Escuta botao
//Quando for fazer uma funcao e passar para o listener
//Deve-se passar sem parentese... Se nao o listener vai pegar o retorno da funcao
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event){
    //Previne o comportamento padrao do form html que eh
    //recarregar a pagina
    event.preventDefault();
    var form = document.querySelector("#formm");
    var paciente = obtemPacienteForm(form);
   

    var erros = validaPaciente(paciente);
    
    if(erros.length == 0){
        var ul = document.querySelector("#mensagens-erro");
        ul.innerHTML = "";
    }else{
        exibeMensagensdeErro(erros);
        //var mensagemErro = document.querySelector("#mensagens-erro");
        return;
    }

    adicionaPacienteNaTabela(paciente);
    

    form.reset();

});

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = inserePaciente(paciente);
    //Inserindo o novo paciente na tabela do html
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function obtemPacienteForm(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC(form.peso.value, form.altura.value)
    }
    return paciente;
}
function inserePaciente(paciente){
    //Peguei os inputs do form agora quero criar novo paciente
    var novoPaciente = document.createElement("tr");
    var pesoTd = document.createElement("td");
    pesoTd.classList.add("info-peso");
    var nomeTd = document.createElement("td");
    nomeTd.classList.add("info-nome");
    var alturaTd = document.createElement("td");
    alturaTd.classList.add("info-altura");
    var gorduraTd = document.createElement("td");
    gorduraTd.classList.add("info-gordura");
    var imcTd = document.createElement("td");
    imcTd.classList.add("info-imc");

    nomeTd.textContent = paciente.nome;
    alturaTd.textContent = paciente.altura;
    pesoTd.textContent = paciente.peso;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc;

    //Com isso, consigo dizer que a tr é pai desses valores
    //<tr><td></td></tr>
    novoPaciente.appendChild(nomeTd);
    novoPaciente.appendChild(pesoTd);
    novoPaciente.appendChild(alturaTd);
    novoPaciente.appendChild(gorduraTd);
    novoPaciente.appendChild(imcTd);
    novoPaciente.classList.add("paciente");

    return novoPaciente;

    
}

function validaPaciente(paciente){
    var erros = [];
    if(!validaNome(paciente.nome)){
        erros.push("Nome invalido")
    }
    if(((paciente.peso <= 0) || (paciente.peso >= 1000)) || (paciente.peso.length == 0)){
       erros.push("Peso Invalido");
    }
    if(((paciente.altura) <= 0 || (paciente.altura >= 3.0)) || (paciente.altura.length == 0)){
        erros.push("Altura Invalida");
    }
    if(paciente.gordura.length == 0){
        erros.push("Gordura invalida")
    }
    
    
    return erros;
}

function validaNome(pacienteNome){
    if(pacienteNome.length == 0){
        return false;
    }
    return true;
}
function exibeMensagensdeErro(erros){
    var ul = document.querySelector("#mensagens-erro");

    ul.innerHTML = "";

    erros.forEach(erro => {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

