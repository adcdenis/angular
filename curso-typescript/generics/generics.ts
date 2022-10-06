// Desafio Mapa
// Array de Objetos (Chave/Valor) -> itens
// Métodos: obter(Chave), colocar({ C, V })
// limpar(), imprimir()

type Par<T, U> = { chave: T, valor: U}

class Mapa<T,U> {

    private valor : Array<Par<T, U>> = []

    public imprimir() {
        console.log(this.valor)
    }

    public limpar() {
        this.valor = []
    }

    public colocar(objeto : Par<T, U>) {

        const obtido = this.obter(objeto.chave)

        if(!obtido) {
            this.valor.push(objeto) ;
        }
    }

    public obter(chave : T) :  Par<T, U> | undefined {
       return  this.valor.find(
            (valor) => valor.chave === chave            
        )
    }

}
 
const mapa = new Mapa<number, string>()
mapa.colocar({ chave: 1, valor: 'Pedro' })
mapa.colocar({ chave: 2, valor: 'Rebeca' })
mapa.colocar({ chave: 3, valor: 'Maria' })
mapa.colocar({ chave: 1, valor: 'Gustavo' })
 
console.log(mapa.obter(2))
mapa.imprimir()
mapa.limpar()
mapa.imprimir()