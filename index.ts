let nomeA: string = "Marcos"

/** TIPOS BÁSICOS, SIMPLES, PRIMITIVOS DE DADOS **/

// string - valores de texto
let nomeB: string = "Dimitri";

// number - números inteiros e valores de ponto flutuante
let idade: number = 25;

// boolean - valores verdadeiros (true) ou falsos (false)
let ativo: boolean = true;

// undefined (indefinido)
let bizarro: undefined = undefined;

// null (nulo)
let nada: null = null;

/*TIPO EXPLÍCITO - Quando você atribui o tipo de dado na declaração.*/
let sobrenome: string = "Teixeira";
//sobrenome = 30; //TypeScript aponta erro

/* TIPO IMPLÍCITO - Quando o TypeScript irá "adivinhar" (inferir) o tipo, com base no valor atribuído. */
let profissao = "Professor";
//profissao = 100; //TypeScript aponta erro

/* TIPOS AVANÇADOS OU ESPECIAIS */

// union type - quando um valor pode ser mais do que um único tipo
let myVariable: string | number;
myVariable = "Hello";
myVariable = 42;
//myVariable = true; //erro

/* any (qualquer) - é um tipo que desabilita a verificação de tipos e permite efetivamente que todos os tipos sejam usados. */
let teste: any = 100;
teste = "texto";
teste = true;
teste ='A';
teste = 1;

/*
ALERTA: any pode ser uma maneira útil de evitar erros, uma vez que desabilita a verificação de tipos, mas o TypeScript não será capaz de fornecer segurança de tipo ou ferramentas que dependem de dados de tipo, como preenchimento automático, não funcionarão.
Lembre-se, deve ser evitado a "qualquer" custo...
*/


/*
* unknown (desconhecido) é uma alternativa semelhante ao any, só que mais segura.
* Esse tipo exige verificações e conversões explícitas para garantir a segurança do tipo durante as operações.
*/

let valor: unknown = 100;

// garantir a segurança do tipo
valor = "Texto agora";
let converte = valor as string;
console.log(converte.length); //10 

// Array - TypeScript tem uma sintaxe específica para matrizes
const names: Array<string> = [];
const names2: string[] = [];
names2.push("José");
names.push("Maria");
// names2.push(1); Argument of type 'number' is not assignable to parameter of type 'string'. Não aceitará um tipo de dado diferente
// do que foi definido.

// A palavra-chave 'readonly' (sem leitura) impede que matrizes sejam alteradas.
const nomes: readonly string[] = ["Dimitri", "João"];
// nomes.push("Jack"); // Erro

/* Inferência de tipo
TypeScript pode inferir o tipo de uma matriz se ela tiver valores. */
const numbers = [1, 2, 3]; // infere tipo number[]

// numbers.push(4); // sem erro
// numbers.push("2"); // Erro

let y: number = numbers[0]; // sem erro, pegar valor 1

/* tuplas - Uma tupla é um array (matriz) tipada com um comprimento e
tipos predefinidos para cada índice. As tuplas são ótimas porque permitem
que cada elemento na matriz seja um tipo conhecido de valor. */
let nossaTupla: [number, boolean, string];
nossaTupla = [5, false, 'Deixa o Like!'];

// EXEMPLO COM ERRO
// nossaTupla = [false, 'Se inscreve também!', 5];

/* Uma boa prática é fazer sua tupla sempre readonly. Por que?
Porque as tuplas só têm tipos fortemente definidos para os valores
iniciais. */

// objects (objetos) - Objetos são variáveis com muitos valores dentro



const carro: {marca: string, modelo:string, anoFabricacao: number} = {
        marca: "Toyota",
        modelo: "Corola",
        anoFabricacao: 2009
}
// atribuindo valor ao objeto
carro.anoFabricacao = 2024;

// objeto não inicializado e sem valores!
const celular: {} = {};

// No TypeScript um objeto pode ter Propriedades opcionais.

const moto: {marca: string, modelo: string, anoFabricacao: number, dono?: string}= {
        marca: "honda",
        modelo: "PCX",
        anoFabricacao: 2024
}    // Deixei o atributo do objeto como OPCIONAL!

    moto.dono = "Marcos Vieira"; // Atribui um valor para "dono"

// Assinaturas de índice - As assinaturas de índice podem ser usadas para objetos sem uma lista definida de propriedades

const nomeIdade: {[index: string]: number} = {};
nomeIdade["Marcos"] = 32;
// nomeIdade["João"] = "cinquenta"; erro

// ALIASES (Criando nossos tipos personalizados)

// para criação do seu próprio tipo, a primeira letra sempre é MAIÚSCULA

type AnoVeiculo = number;
type MarcaVeiculo = string;
type ModeloVeiculo = string;
type Carro = {
    ano: AnoVeiculo,
    marca: MarcaVeiculo,
    modelo: ModeloVeiculo
};

// Exemplo de uso

const uno: AnoVeiculo = 2001;
const gol: MarcaVeiculo = "Wolksvagen";
const TSI: ModeloVeiculo = "Up";
const laFerrari: Carro = {
    ano: 2024,
    marca: "Ferrari",
    modelo: "La Ferrari"

};

// INTERFACE: interface ou MODELO de um OBJETO!

    interface Retangulo {
        altura: number,
        largura: number

    };

// Exemplo de uso

    const novoItem: Retangulo = {
        altura: 10,
        largura: 11        

    };

    /* 
    const novoItem2: Retangulo = {
        altura: 50,
        largura: 20,
        nome: "...",

    };
*/ 
// ERRO Object literal may only specify known properties, and 'nome' does not exist in type 'Retangulo'.
// A interface é um MOLDE para nosso OBJETO!


// ESTENDENDO INTERFACES - herdar propriedades da interface original e adicionar algo!

interface RetanguloColorido extends Retangulo {
    cor: string

};

// USO

 const novoItem3: RetanguloColorido = {
    altura: 10,
    largura: 40,
    cor: "roxa"

 };

 /* FUNÇÕES 
 O TypeScrit tem uma sintaxe específica para digitar parâmetros de função e valores de retorno.
 */ 

 // DEFININDO O TIPO DO RETORNO DA FUNÇÃO

 function getTime(): number {
    return new Date().getTime();
 };

 // Void - Quando a função não tem retorno

 function printHello(): void {
    console.log("Hello my friend!");
 };

 // Tipos em parâmetros de função

 function multiplicacao(a: number, b: number): number{
    return a * b;

 };

 multiplicacao(10,10); // 100
// ERRO multiplicacao("teste",10); Argument of type 'string' is not assignable to parameter of type 'number'

 // Parâmetros opcionais
 function add(a: number, b: number,c?: number): number{
    return a + b + (c || 0);
 };

 add(5,3); // saída 8
 add(5,3,10);// saída 18

 // Parâmetros com valores iniciais

    function saudacao(nome: string = "Marcos"): void {
    console.log(`Olá, ${nome}!`); 
    
    };

    saudacao(); // Saída: Olá, Marcos!
    saudacao("Alice"); // Saída: Olá, Alice!

function hello({nome, idade}: {nome: string, idade:number}): void {
    console.log(`Hello, ${nome}! Você tem ${idade} anos.`);
};

hello({nome: "Mariana", idade: 20});

// Generics (genéricos)
// Geralmente usamos T para dizer que é um tipo genérico!
function imprimirValor<T>(valor: T): void {
    console.log(valor);
}

imprimirValor<number>(42);
imprimirValor<string>("Olá");
imprimirValor<boolean>(true);