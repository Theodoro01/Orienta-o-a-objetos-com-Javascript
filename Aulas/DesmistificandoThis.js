class Filme{
    constructor(titulo, ano, genero,atores, diretor, duracao){
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.diretor = diretor;
        this.atores = atores;
        this.duracao = duracao;
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
    Ficha(){
        console.log("Titulo: " + this.titulo)
        console.log("Ano: " + this.ano)
        console.log("Genero: " + this.genero)
        this.Reproduzir();
        this.Avançar();
    }
}

var vingadores = new Filme("Vingadores 2", "2015", "Ação", "alguem", "blabla", "2h");

vingadores.Ficha();

// console.log(vingadores.titulo)
// console.log(vingadores.genero)

var hulk = new Filme("Hulk", "2015", "Ação","blabla", "2h");

hulk.Ficha();

// console.log(hulk.titulo)
// console.log(hulk.genero)