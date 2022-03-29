export abstract class Escritor {
  private _ferramenta: Ferramenta | null = null;
  constructor(private _nome: string) {}

  get nome(): string {
    return this.nome;
  }
}

export abstract class Ferramenta {
  constructor(private _nome: string) {}

  getNome(): string {
    return this.nome;
  }

  abstract escrever(): void;
}

// export class Caneta extends Ferramenta {
//   constructor() {
//     super(nome);
//   }

//   escrever() {
//     console.log('Estou escrevendo com a caneta ' + this.nome);
//   }
// }

// const caneta = new Caneta('Bic');



22

2345567566666



123456789/+-*XPathExpression
=


==
