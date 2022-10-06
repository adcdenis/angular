// Exercício 1 - Classe
// function Moto(nome) {
//     this.nome = nome
//     this.velocidade = 0

//     this.buzinar = function() {
//         console.log('Toooooooooot!')
//     }

//     this.acelerar= function(delta) {
//         this.velocidade = this.velocidade + delta
//     }
// }

class Moto {
  private _velocidade: number = 0;

  constructor(private nome: string) {}

  public buzinar(): void {
    console.log("Toooooooooot!");
  }

  public acelerar(delta: number): void {
    this._velocidade += delta;
  }

  public get velocidade(): number {
    return this._velocidade;
  }
}

var moto = new Moto("Ducati");
moto.buzinar();
console.log(moto.velocidade);
moto.acelerar(30);
console.log(moto.velocidade);

// Exercício 2 - Herança
// var objeto2D = {
//     base: 0,
//     altura: 0
// }

// var retangulo = Object.create(objeto2D)
// retangulo.base = 5
// retangulo.altura = 7
// retangulo.area = function() {
//     return this.base * this.altura
// }

class Objeto2D {
  constructor(private base: number, private altura: number) {}

  public area(): number {
    return this.base * this.altura;
  }
}

class Retangulo extends Objeto2D {
  constructor(base: number, altura: number) {
    super(base, altura);
  }
}

const retangulo = new Retangulo(5, 7);
console.log(retangulo.area());

class Estagiario {
  private _primeiroNome: string = "";

  get primeiroNome(): string {
    return this._primeiroNome;
  }

  set primeiroNome(nome: string) {
    if (nome && nome.length >= 3) {
      this._primeiroNome = nome;
    } else {
      this._primeiroNome = "";
    }
  }
}

const estagiario = new Estagiario();
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = "Le";
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = "Leonardo";
console.log(estagiario.primeiroNome);
