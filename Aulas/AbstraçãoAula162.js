//Class criada:
class Filme{
    //Atributos: "constructor" local onde define os atributos
    constructor(){
        this.titulo = '';
        this.ano = 1984;
        this.genero = '';
        this.diretor = '';
        this.elenco = [];
        this.duracao = 0;
    }
    //Metodos: 
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
    //OBS: METODOS SÃO UMA FORMA DE ESCREVER FUNÇÕES
}