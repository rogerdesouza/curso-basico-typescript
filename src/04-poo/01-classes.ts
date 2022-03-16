export class Empresa {
  public readonly nome: string; // public não é obrigatório colocar (o padrao é não colocar)
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Colaborador {
  constructor(public readonly nome: string) {} // aqui o public é obrigatorio
}

const empresa1 = new Empresa('Udemy', '11.111.111/0001-11');

const colaborador1 = new Colaborador('Roger');
const colaborador2 = new Colaborador('Vanessa');
const colaborador3 = new Colaborador('Vinicius');
empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);

console.log(empresa1);
empresa1.mostrarColaboradores();
