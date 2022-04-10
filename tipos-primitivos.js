// strings, number (int, floats), boolean

// let minha-var (ERRO)

let minha_var = "string";
let _var1 = 2;
let Minha = `minha template literal`;

let idade = 21;
let msg1 = 'eu possuo ' + idade + ' anos';
let msg2 = `eu possuo ${idade} anos`;

console.log(msg2);
console.log(typeof msg1, typeof idade);

const n1 = 10
const n2 = 1.1
console.log(`O tipo de n1 é ${typeof n1} e seu valor é ${n1}`);
console.log(`O tipo de n2 é ${typeof n2} e seu valor é ${n2}`);

const isValid = true;
console.log(`isValid: ${isValid}`);

let varTeste = null;
console.log(varTeste);
console.log(typeof varTeste);
varTeste = 10;
console.log(typeof varTeste, varTeste);