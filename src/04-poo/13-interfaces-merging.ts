interface Pessoa {
  nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
}

interface Pessoa {
  readonly enderecos: readonly string[];
}

interface Pessoa {
  idade?: number;
}

const pessoaTeste: Pessoa = {
  nome: 'Teste',
  sobrenome: 'Silva',
  enderecos: ['Av Brasil'],
};

console.log(pessoaTeste);
