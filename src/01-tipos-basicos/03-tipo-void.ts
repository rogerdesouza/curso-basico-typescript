function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Roger',
  sobrenome: 'Souza',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Roger', 'Souza');
pessoa.exibirNome();

export { pessoa };
