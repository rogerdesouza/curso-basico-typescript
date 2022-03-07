// tipo never
export function criarErro(): never {
  throw new Error('Erro qualquer');
}
criarErro();
