// tipo enum

enum Cores {
  VERMELHO,
  AZUL,
  AMARELO = 100,
}

enum Cores {
  ROXO = 'ROXO',
  VERDE = 201,
  ROSA,
}

console.log(Cores);
console.log(Cores.AMARELO);
console.log(Cores[100]);

export function escolhaCor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaCor(201);
