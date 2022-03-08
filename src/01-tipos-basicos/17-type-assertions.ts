/** recomendado */
// condicional
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';

// type assertion
const body3 = document.querySelector('body') as HTMLBodyElement;
if (body3) body3.style.background = 'red';

// HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer coisa';
input.focus();

/** não recomendado */
// non-null assertion (!)
const body2 = document.querySelector('body')!;
if (body2) body2.style.background = 'red';

// subindo tipo
const body4 = document.querySelector('body') as unknown as number;
