let x = 10 // eslint-disable-line
x = 0b1010;

const y = 10; // é literalmente o 10 (subtipo de number)

const pessoa = {
  nome: 'Roger' as const, // é uma asserção
  sobrenome: 'Souza',
};

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul') {
  return cor;
}

console.log(escolhaCor('Azul'));

// Module mode
export default 1;
