class DateHelper {
    //Classe estatica
    constructor() {
        
        throw new Error('Esta classe não pode ser instanciada');
    }
    //Template String
    static dataParaTexto(data) {
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
    }
    //Verificação de integridade com essa tecnica
    //Expressoes regulares
    static textoParaData(texto) {
        
        if(!/\d{4}-\d{2}-\d{2}/.test(texto)) 
            throw new Error('Deve estar no formato aaaa-mm-dd');
             
        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
    }
    
}