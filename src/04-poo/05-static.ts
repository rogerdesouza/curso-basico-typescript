// forma nova
export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-00';

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}

  static falaOi(): void {
    console.log('Oi');
  }

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

const pessoa1 = new Pessoa('Roger', 'Souza', 37, '987.654.321-00');
const pessoa2 = Pessoa.criaPessoa('Teste', 'Silva');

console.log(pessoa1);
console.log(pessoa2);

Pessoa.falaOi();
