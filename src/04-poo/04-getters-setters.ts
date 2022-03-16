// forma nova
export class Pessoa {
  constructor(private _cpf: string) {
    this.cpf = _cpf;
  }

  set cpf(cpf: string) {
    console.log('SETTER CHAMANDO');
    this._cpf = cpf;
  }

  get cpf(): string {
    console.log('GETTER CHAMANDO');
    return this._cpf.replace(/\D/g, '');
  }
}

const pessoa = new Pessoa('123.456.789-00');
pessoa.cpf = '123.456.789-99';
console.log(pessoa.cpf);

// forma antiga
// export class Pessoa {
//   constructor(
//     private cpf: string,
//   ) {}

//   setCpf(valor: string): void {
//     this.cpf = valor;
//   }

//   getCpf(): string {
//     return this.cpf.replace(/\D/g, '');
//   }
// }

// const pessoa = new Pessoa('Roger', 'Silva', 37, '123.456.789-00');
// pessoa.setCpf('123.456.789-99');
// console.log(pessoa.getCpf());
