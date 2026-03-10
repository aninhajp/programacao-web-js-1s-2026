let nome = 'Ana';
const sobrenome = 'Silva';
nome = 'Julia';

let templateString = `O meu nome é ${nome} ${sobrenome}`;
console.log(templateString);

let A = 2;
let B = 5.56;
let C = 3.14;
const PI = 3.14;

let portencia = A ** C;
console.log(typeof A);
console.log(typeof B);
console.log(`${A}^${C}=${portencia}`);


let verdadeiro = true;
let falso = false;

console.log(typeof verdadeiro);

let E = verdadeiro && falso;
let OU = verdadeiro || falso;
console.log(E);
console.log(OU);


let maior_que = B > A
console.log(`${B}>${A}=${maior_que}`);

let numeros = [1, 3.14, -7, 99, 505.67];
console.log(`numeros[0] = ${numeros[0]}`);
console.log(`numeros[3] =  ${numeros[3]}`);
console.log(typeof numeros);


let informacoes = {
    nome1: "Ana", 
    cpf: 3213232, 
    telefone: [61981713461, 323123123]
};
console.log(informacoes);
console.log(`informacoes.nome = ${informacoes.nome1}`);
