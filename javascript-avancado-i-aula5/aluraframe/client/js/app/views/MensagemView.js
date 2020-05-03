class MensagemView extends View{

    constructor(element){
        super(element);
    }


    template(model){

        if(!model.texto){
            return "<p></p>";
        }
        return `<p class="alert alert-info">${model.texto}</p>`

    }


}