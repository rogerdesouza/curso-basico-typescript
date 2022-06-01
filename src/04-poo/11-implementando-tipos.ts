// tradicional

// export abstract class TipoPessoa {
//   protected abstract nome: string;
//   protected abstract sobrenome: string;
//   protected abstract nomeCompleto(): string;
// }

// export class Pessoa extends TipoPessoa {
//   constructor(protected nome: string, protected sobrenome: string) {
//     super();
//   }

//   protected nomeCompleto(): string {
//     return this.nome + ' ' + this.sobrenome;
//   }
// }

// com tipo como se fosse interface
// só permite public
// pode implementar quantos tipos quiser...
// é a mesma ideia, herda só de 1 e implementa de N
type NomePessoa = {
  nome: string;
  sobrenome: string;
};

type MetodosPessoa = {
  nomeCompleto(): string;
};

type TipoPessoa = NomePessoa & MetodosPessoa;

export class Pessoa implements TipoPessoa {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Teste', 'Silva');
console.log(pessoa.nomeCompleto());
