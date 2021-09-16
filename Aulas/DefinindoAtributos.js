class Filme{
    constructor(){
        this.titulo = '';
        this.ano = 0;
        this.genero = '';
        this.diretor = '';
        this.atores = [];
        this.duracao = 0;
    }
    
    Reproduzir(){
        console.log("Reproduzindo...")
    }
    Pausar(){
        console.log("Pausado")
    }
    Avançar(){
        console.log("Avançar")
    }
    Fechar(){
        console.log("Fechar")
    }
}

// DEFINIÇÃO DE
var vingadores = new Filme();

vingadores.titulo = "Vingadores 2"
vingadores.genero = "Ação"
vingadores.Reproduzir();
console.log(vingadores.titulo)
console.log(vingadores.genero)

var hulk = new Filme();

hulk.titulo = "hulk"
hulk.genero = "Ação"
hulk.Reproduzir();
console.log(hulk.titulo)
console.log(hulk.genero)