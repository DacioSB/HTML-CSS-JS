var botaoAdicionar = document.querySelector("#importar-paciente");

botaoAdicionar.addEventListener("click", function name(params) {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function() {
        
        //Procurando antes o erro
        //Pra deixar invisivel quando for 200
        //E visivel quando nao for 200
        var erroAjax = document.querySelector("#erro-ajax");
        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var herokuPacientes = JSON.parse(resposta);
            //AJAX Assincrono
            //Nao esta parando o fluxo do JS
            for (let i = 0; i < herokuPacientes.length; i++) {
                adicionaPacienteNaTabela(herokuPacientes[i]);
            
            }
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            
            erroAjax.classList.remove("invisivel");

        }
        
        
    });
    //Depois do send é que a gente executa o codigo acima
    xhr.send();
});