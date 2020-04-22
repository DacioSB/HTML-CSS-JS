var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function () {
    var pacientes = document.querySelectorAll(".paciente");
    //Se o campo de filtragem nao estiver vazio, entao filtra
    if(this.value.length > 0){
        pacientes.forEach(paciente => {
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;

            //Expressao regular
            var expressao = new RegExp(this.value, "i");
            //Pego o valor do input
            //Percorro todos os pacientes perguntando quem tem
            //Aquele tdNome
            //Se tiver o nome, entao eu mostro, se nao, invisivel
            
            if(!expressao.test(nome)){
                paciente.classList.add("invisivel");
             }else{
                paciente.classList.remove('invisivel');
             }
             
        
                
        });
    }else{
        //Se estiver vazio, deixa todos os pacientes visiveis
        for(var i = 0; i < pacientes.length; i++){
            pacientes[i].classList.remove("invisivel");
        }
    }
    
    
    


});