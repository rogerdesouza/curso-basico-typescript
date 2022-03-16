export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

export class Aluno extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string,
  ) {
    super(nome, sobrenome, idade, cpf);
  }
  getNomeCompleto(): string {
    console.log('Fazendo algo antes');
    const resultado = super.getNomeCompleto();
    return resultado + ' TESTANDO';
  }
}

export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return `Cliente: Sr. ${this.nome}`;
  }
}

const pessoa = new Pessoa('Van', 'Silva', 37, '321.654.987-00');
const aluno = new Aluno('Vini', 'Souza', 3, '123.456.789-00', '5');
const cliente = new Cliente('Roger', 'Souza', 37, '987.654.321-00');

console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
