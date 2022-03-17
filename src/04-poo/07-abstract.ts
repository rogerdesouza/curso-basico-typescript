export abstract class Personagem {
  protected abstract emoji: string;

  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ) {}

  atacar(personagem: Personagem): void {
    this.bordao();
    console.log(`${this.nome} está atacando...`);
    personagem.perderVida(this.ataque);
  }

  perderVida(forcaAtaque: number): void {
    this.vida -= forcaAtaque;
    console.log(
      `${this.emoji} - ${this.nome} agora tem ${this.vida} de vida...\n`,
    );
  }

  abstract bordao(): void;
}

export class Guerreira extends Personagem {
  protected emoji = '\u{1F9DD}';

  bordao(): void {
    console.log(this.emoji + ' GUERREIRA AO ATAQUEEEEE!!!');
  }
}
export class Monstro extends Personagem {
  protected emoji = '\u{1F9DF}';
  private bordoes: string[] = [
    ' MONSTERRRRRR',
    ' HOJE VOCÊ VAI MORRER...',
    ' GOLPE MONSTRO DO TERROR!!!',
  ];

  bordao(): void {
    console.log(
      this.emoji +
        this.bordoes[Math.floor(Math.random() * this.bordoes.length)],
    );
  }
}

const guerreira = new Guerreira('Guerreira', 100, 1000);
const monstro = new Monstro('Monstro', 87, 1000);

guerreira.atacar(monstro);
monstro.atacar(guerreira);
monstro.atacar(guerreira);
guerreira.atacar(monstro);
monstro.atacar(guerreira);
monstro.atacar(guerreira);
