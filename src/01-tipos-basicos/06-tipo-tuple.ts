// tipo tuple

const dadosCliente1: readonly [number, string] = [1, 'Roger'];
const dadosCliente2: [number, string, string] = [1, 'Roger', 'Souza'];
const dadosCliente3: [number, string, string?] = [1, 'Roger'];
const dadosCliente4: [number, string, ...string[]] = [1, 'Roger'];

dadosCliente2[0] = 100;
dadosCliente2[1] = 'Teste';

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);
