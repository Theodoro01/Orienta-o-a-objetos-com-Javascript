class Leitor{
    Ler(caminho){
        return "Conteudo do Leitor!"
    }
}
class Escritor{
    Escrever(arquivo, conteudo){
        console.log("Conteudo do Escritor!")
    }
}
class Criador{
    Criar(nome){
        console.log("Conteudo do Criador!")
    }
}
class CriadorDePdf{
    Criar(){
        console.log("Conteudo do Criador De Pdf!")
    }
}   
class Destruidor{
    Destruir(nome){
        console.log("Conteudo do Destruidor");
    }
}

class ManipuladorDeArquivo{
    constructor(nome){
        this.arquivo = nome;
        this.leitor = new Leitor();
        this.escritor = new Escritor();
        this.criador = new Criador();
        this.destruidor = new Destruidor();
    }
}

class GerenciadorDeArquivos{
    constructor(arquivo, nome){
        this.criador = new CriadorDePdf();
        this.escritor = new Escritor();
    }
    SalvarListasDeUsuarios(lista){
        this.criador.Criar("usuarios.txt");
        this.escritor.Escrever("usuarios.txt", lista);
    }
}


var manipulador = new ManipuladorDeArquivo("meuarquivo.txt");
manipulador.leitor.Ler();
manipulador.escritor.Escrever()
manipulador.criador.Criar();
manipulador.destruidor.Destruir();


var usuarios = new GerenciadorDeArquivos();
usuarios.SalvarListasDeUsuarios(["Victor", "Lima"])