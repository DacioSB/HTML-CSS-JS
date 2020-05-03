class View {

    constructor(element){
        this._element = element;
    }

    template(){
        throw new Error("Epaa template deve ser sobrescrita");
        
    }

    update(model){
        this._element.innerHTML = this.template(model);
    }

}