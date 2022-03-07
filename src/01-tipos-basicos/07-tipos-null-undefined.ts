let x;
if (typeof x === 'undefined') x = 20;
console.log(x * 2);

export function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  return { firstName, lastName };
}

export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}
const squareOfTwoNumber = squareOf(2);

if (squareOfTwoNumber === null) {
  console.log('número inválido');
} else {
  console.log(squareOfTwoNumber * 100);
}
