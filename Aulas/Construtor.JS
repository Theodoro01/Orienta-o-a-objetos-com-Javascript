class Filme{
                //Parametros
    constructor(titulo, ano, genero, diretor, duracao){
//var depois do this é atributo e a outra é parametro ex:
        //atributo: //Parametro:
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
}
                        // Recebendo parametros:
var vingadores = new Filme("Vingadores 2", "2015", "Ação","blabla", "2h");
        // invicando var depois do this:
console.log(vingadores.titulo)
console.log(vingadores.genero)
                     // Recebendo parametros:
var hulk = new Filme("Hulk", "2015", "Ação","blabla", "2h");
// invicando var depois do this:
console.log(hulk.titulo)
console.log(hulk.genero)