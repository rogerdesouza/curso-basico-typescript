interface NomePessoa {
  nome: string;
  sobrenome: string;
}

interface MetodosPessoa {
  nomeCompleto(): string;
}

type TipoPessoa = NomePessoa & MetodosPessoa;
interface TipoPessoa2 extends NomePessoa, MetodosPessoa {}

export class Pessoa implements TipoPessoa2 {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoaObj: TipoPessoa2 = {
  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  },
  nome: 'Agora',
  sobrenome: 'Vai',
};

const pessoa = new Pessoa('Teste', 'Silva');
console.log(pessoa.nomeCompleto());
console.log(pessoaObj.nomeCompleto());
