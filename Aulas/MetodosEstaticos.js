/* 
            METODO ESTATICOS

PERMITE QUE VOCE ACESSE METODOS DE UMA CLASSE 
SEM QUE PRECISE CRIAR UM OBJETO ANTES.

*/
class Calculadora{
    static Somar(a,b){
        console.log(a + b);
    }

    static Sub(a,b){
        console.log(a - b)
    }
}

// Ao inves de fazer isto:
var calc = new Calculadora();
calc.Somar(88,5);
calc.Sub(35,5);

// COLOQUE STATIC ANTES DE DEFINIR O METODO EX:
// static Somar(){}

Calculadora.Somar(2, 5);
Calculadora.Sub(7, 5);