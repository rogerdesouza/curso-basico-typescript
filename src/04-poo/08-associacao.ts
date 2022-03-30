export class Escritor {
  private _ferramenta: Ferramenta | null = null;
  constructor(private _nome: string) {}

  get nome(): string {
    return this.nome;
  }

  set ferramenta(ferramenta: Ferramenta) {
    this._ferramenta = ferramenta;
  }
}

export abstract class Ferramenta {
  constructor(private _nome: string) {}

  get nome(): string {
    return this._nome;
  }

  abstract escrever(): void;
}

export class Caneta extends Ferramenta {
  escrever(): void {
    console.log(`Estou escrevendo com a caneta ${this.nome}`);
  }
}

export class MaquinaEscrever extends Ferramenta {
  escrever(): void {
    console.log(`Estou digitando com a máquina de escrever ${this.nome}`);
  }
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
