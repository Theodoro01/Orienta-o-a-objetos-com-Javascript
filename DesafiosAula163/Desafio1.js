class Tenis{
    constructor(){
        this.cor = "";
        this.modelo = "";
        this.marca = "";
        this.valor = 0;
        this.tamanho = 0;
        this.quantidade = 10;
        this.emEstoque = true;
    }
    
    Vender(){
        if(this.quantidade > 0){
            console.log("Vendeu...")
        }
    }
    Trocar(garantia){
        if(garantia > 0){
            console.log("Trocou...")
        }

    }

    Conforto(){
        if(this.Conforto === true){
            console.log("Comfortavel!!")
        }else{
            console.log("Desconfortavel")
        }
    }
    Duração(){
        console.log("Durando!")
    }
    Estabilidade(){
        console.log("Estabilidade OK!")
    }
    Resistencia(){
        console.log("Muito resistente!")
    } 

}