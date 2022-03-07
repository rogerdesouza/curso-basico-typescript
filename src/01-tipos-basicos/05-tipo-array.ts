// Array<T> - T[]

// como definir variáveis
const array1: string[] = ['Roger', 'Souza'];
const array2: Array<string> = ['Roger', 'Souza'];

const arrayRO1: readonly string[] = ['Roger', 'Souza'];
const arrayRO2: ReadonlyArray<string> = ['Roger', 'Souza'];

console.log(array1, array2, arrayRO1, arrayRO2);

// como definir métodos
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
