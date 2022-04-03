export class Escritor {
  private _ferramenta: Ferramenta | null = null;
  constructor(private _nome: string) {}

  set ferramenta(ferramenta: Ferramenta | null) {
    this._ferramenta = ferramenta;
  }

  get ferramenta(): Ferramenta | null {
    return this._ferramenta;
  }

  get nome(): string {
    return this._nome;
  }

  escrever(): void {
    if (this.ferramenta === null) {
      console.log('Não posso escrever sem ferramentas...');
      return;
    }
    this.ferramenta.escrever();
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
    console.log(`Estou escrevendo com a caneta ${this.nome}!`);
  }
}

export class MaquinaEscrever extends Ferramenta {
  escrever(): void {
    console.log(`Estou digitando com a máquina de escrever ${this.nome}!`);
  }
}

const escritor = new Escritor('Machado de Assis');
const caneta = new Caneta('Bic');
const maquina = new MaquinaEscrever('Olivetti');

// console.log(escritor.nome);
// console.log(caneta.nome);
// console.log(maquina.nome);

escritor.ferramenta = caneta;
escritor.escrever();
