var pacientes = document.querySelectorAll(".paciente");


var table = document.querySelector("table");

//Em vez de percorrer os filhos tudin
//Melhor chamar a tag pai e perguntar a ele quem foi clicado
//Evento
//O evento escuta como uma bolha de refrigerante
//Sai do filho e vai subindo pra o pai
//É o que chamamos de delegação de elementos
table.addEventListener('dblclick', function (event) {
    var alvoEvento = event.target;
    alvoEvento.parentNode.classList.add('fade-out');
    //Com isso aqui da tempo de mostrar
    //Na tela o efeito de transição
    setTimeout(() => {
        alvoEvento.parentNode.remove();
    }, 500);
    
});



//Remover com duplo clique
//This é atrelado ao dono do evento
//pacientes.forEach(paciente => {
//    paciente.addEventListener("dblclick", function(){
//       this.remove();
//    });
//});