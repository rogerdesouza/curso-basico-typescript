/* eslint-disable */
// tipos básicos - aqui ocorre a inferência de tipos

let nome: string = 'Roger'; // qualquer tipo string - '' "" ``
let idade: number = 37; // 10, 10.57, -5.55, 0xf00d, 0b1010, 0o7744
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol('qualquer-symbol'); // symbol
// let big: bigint = 10n; // bigInt

// arrays
let arrayNumbers: Array<number> = [1, 2, 3]
let arrayNumbers2: number[] = [1, 2, 3]
let arrayStrings: Array<string> = ['a', 'b']
let arrayStrings2: string[] = ['a', 'b']

// objetos
let pessoa: { nome: string, idade: number, adulto?: boolean } = {
    idade: 37,
    nome: 'Roger'
};

// funções
function soma(x: number, y: number): number {
    return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;

console.log(soma2(2,3));
