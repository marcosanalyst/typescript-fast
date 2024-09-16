"use strict";
let nomeA = "Marcos";
/** TIPOS BÁSICOS, SIMPLES, PRIMITIVOS DE DADOS **/
// string - valores de texto
let nomeB = "Dimitri";
// number - números inteiros e valores de ponto flutuante
let idade = 25;
// boolean - valores verdadeiros (true) ou falsos (false)
let ativo = true;
// undefined (indefinido)
let bizarro = undefined;
// null (nulo)
let nada = null;
/*TIPO EXPLÍCITO - Quando você atribui o tipo de dado na declaração.*/
let sobrenome = "Teixeira";
//sobrenome = 30; //TypeScript aponta erro
/* TIPO IMPLÍCITO - Quando o TypeScript irá "adivinhar" (inferir) o tipo, com base no valor atribuído. */
let profissao = "Professor";
//profissao = 100; //TypeScript aponta erro
/* TIPOS AVANÇADOS OU ESPECIAIS */
// union type - quando um valor pode ser mais do que um único tipo
let myVariable;
myVariable = "Hello";
myVariable = 42;
//myVariable = true; //erro
/* any (qualquer) - é um tipo que desabilita a verificação de tipos e permite efetivamente que todos os tipos sejam usados. */
let teste = 100;
teste = "texto";
teste = true;
teste = 'A';
/*
ALERTA: any pode ser uma maneira útil de evitar erros, uma vez que desabilita a verificação de tipos, mas o TypeScript não será capaz de fornecer segurança de tipo ou ferramentas que dependem de dados de tipo, como preenchimento automático, não funcionarão.
Lembre-se, deve ser evitado a "qualquer" custo...
*/
/*
* unknown (desconhecido) é uma alternativa semelhante ao any, só que mais segura.
* Esse tipo exige verificações e conversões explícitas para garantir a segurança do tipo durante as operações.
*/
let valor = 100;
// garantir a segurança do tipo
valor = "Texto agora";
let converte = valor;
console.log(converte.length); //10 
// Array - TypeScript tem uma sintaxe específica para matrizes
const names = [];
const names2 = [];
names2.push("José");
names.push("Maria");
// names2.push(1); Argument of type 'number' is not assignable to parameter of type 'string'. Não aceitará um tipo de dado diferente
// do que foi definido.
// A palavra-chave 'readonly' (sem leitura) impede que matrizes sejam alteradas.
const nomes = ["Dimitri", "João"];
// nomes.push("Jack"); // Erro
/* Inferência de tipo
TypeScript pode inferir o tipo de uma matriz se ela tiver valores. */
const numbers = [1, 2, 3]; // infere tipo number[]
// numbers.push(4); // sem erro
// numbers.push("2"); // Erro
let y = numbers[0]; // sem erro, pegar valor 1
/* tuplas - Uma tupla é um array (matriz) tipada com um comprimento e
tipos predefinidos para cada índice. As tuplas são ótimas porque permitem
que cada elemento na matriz seja um tipo conhecido de valor. */
let nossaTupla;
nossaTupla = [5, false, 'Deixa o Like!'];
// EXEMPLO COM ERRO
// nossaTupla = [false, 'Se inscreve também!', 5];
/* Uma boa prática é fazer sua tupla sempre readonly. Por que?
Porque as tuplas só têm tipos fortemente definidos para os valores
iniciais. */
// objects (objetos) - Objetos são variáveis com muitos valores dentro
const carro = {
    marca: "Toyota",
    modelo: "Corola",
    anoFabricacao: 2009
};
// atribuindo valor ao objeto
carro.anoFabricacao = 2024;
// No TypeScript um objeto pode ter Propriedades opcionais.
const moto = {
    marca: "honda",
    modelo: "PCX",
    anoFabricacao: 2024
}; // Deixei o atributo do objeto como OPCIONAL!
moto.dono = "Marcos Vieira"; // Atribui um valor para "dono"
// Assinaturas de índice - As assinaturas de índice podem ser usadas para objetos sem uma lista definida de propriedades
const nomeIdade = {};
nomeIdade["Marcos"] = 32;
// Exemplo de uso
const uno = 2001;
const gol = "Wolksvagen";
const TSI = "Up";
const laFerrari = {
    ano: 2024,
    marca: "Ferrari",
    modelo: "La Ferrari"
};
;
// Exemplo de uso
const novoItem = {
    altura: 10,
    largura: 11
};
;
// USO
const novoItem3 = {
    altura: 10,
    largura: 40,
    cor: "roxa"
};
/* FUNÇÕES
O TypeScrit tem uma sintaxe específica para digitar parâmetros de função e valores de retorno.
*/
// DEFININDO O TIPO DO RETORNO DA FUNÇÃO
function getTime() {
    return new Date().getTime();
}
;
// Void - Quando a função não tem retorno
function printHello() {
    console.log("Hello my friend!");
}
;
// Tipos em parâmetros de função
function multiplicacao(a, b) {
    return a * b;
}
;
multiplicacao(10, 10); // 100
// ERRO multiplicacao("teste",10); Argument of type 'string' is not assignable to parameter of type 'number'
// Parâmetros opcionais
function add(a, b, c) {
    return a + b + (c || 0);
}
;
add(5, 3); // saída 8
add(5, 3, 10); // saída 18
// Parâmetros com valores iniciais
function saudacao(nome = "Marcos") {
    console.log(`Olá, ${nome}!`);
}
;
saudacao(); // Saída: Olá, Marcos!
saudacao("Alice"); // Saída: Olá, Alice!
function hello({ nome, idade }) {
    console.log(`Hello, ${nome}! Você tem ${idade} anos.`);
}
;
hello({ nome: "Mariana", idade: 20 });
// Generics (genéricos)
function imprimirValor(valor) {
    console.log(valor);
}
imprimirValor(42);
imprimirValor("Olá");
imprimirValor(true);
