let adultosComAlcool, adultosSemAlcool, criancas, adultos, pessoas;

let carne, acompanhamentos, cerveja, refrigerante, agua;
console.log("--- Churrasco ---\n");
const readline = require('readline');
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});


rl.question("Adultos (que consomem bebidas alcoólicas).......: ", (inputAdultosComAlcool) => {
adultosComAlcool = parseInt(inputAdultosComAlcool);
rl.question("Adultos (que não consomem bebidas alcoólicas)...: ", (inputAdultosSemAlcool) => {
adultosSemAlcool = parseInt(inputAdultosSemAlcool);
rl.question("Crianças........................................: ", (inputCriancas) => {
criancas = parseInt(inputCriancas);
adultos = adultosComAlcool + adultosSemAlcool;
pessoas = adultos + criancas;
carne = 0.4 * adultos + 0.2 * criancas;
acompanhamentos = 0.2 * pessoas;
cerveja = 2 * adultosComAlcool;
refrigerante = 0.5 * (adultosSemAlcool + criancas);
agua = 0.4 * pessoas;

console.log();

console.log(`Carne.............: ${carne.toFixed(1)}kg`);
console.log(`Acompanhamentos...: ${acompanhamentos.toFixed(1)}kg`);
console.log(`Cerveja...........: ${cerveja.toFixed(1)}l`);
console.log(`Refrigerante......: ${refrigerante.toFixed(1)}l`);
console.log(`Água..............: ${agua.toFixed(1)}l`);
rl.close();
});
});
});