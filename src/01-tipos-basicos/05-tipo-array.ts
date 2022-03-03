// Arrays<T> - T[]

export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((acumulador, valor) => acumulador * valor, 1);
}

export function concatenaArgs(...args: string[]): string {
  return args.reduce((acumulador, valor) => acumulador + ' ' + valor);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const result1 = multiplicaArgs(1, 2, 3);
const result2 = concatenaArgs('Roger', 'Souza');
const result3 = toUpperCase('a', 'b', 'c');

console.log(result1);
console.log(result2);
console.log(result3);
