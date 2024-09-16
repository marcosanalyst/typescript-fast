1. **Tipos de Dados Primitivos:**
   - **string:** Armazena valores de texto (e.g., `let nomeA: string = "Marcos"`).
   - **number:** Armazena números inteiros e flutuantes (e.g., `let idade: number = 25`).
   - **boolean:** Armazena valores verdadeiros ou falsos (e.g., `let ativo: boolean = true`).
   - **undefined:** Variáveis sem valor atribuído (e.g., `let bizarro: undefined = undefined`).
   - **null:** Representa ausência de valor (e.g., `let nada: null = null`).

2. **Tipo Explícito e Implícito:**
   - **Explícito:** O tipo é definido diretamente (e.g., `let sobrenome: string = "Teixeira"`).
   - **Implícito:** O TypeScript infere o tipo a partir do valor atribuído (e.g., `let profissao = "Professor"`).

3. **Union Types (Tipos União):**
   - Permite que uma variável tenha mais de um tipo (e.g., `let myVariable: string | number`).

4. **Tipos Especiais:**
   - **any:** Permite qualquer tipo, mas desabilita a verificação de tipo (e.g., `let teste: any = 100`).
   - **unknown:** Similar ao any, mas exige verificações para garantir segurança de tipo (e.g., `let valor: unknown = 100`).

5. **Arrays (Matrizes):**
   - Sintaxe para definir arrays (e.g., `const names: Array<string> = []` ou `const names2: string[] = []`).
   - **readonly:** Garante que arrays não possam ser modificados (e.g., `const nomes: readonly string[] = ["Dimitri", "João"]`).

6. **Tuplas:**
   - Arrays com tipos e tamanhos predefinidos (e.g., `let nossaTupla: [number, boolean, string]`).
   - **readonly** para tuplas garante imutabilidade.

7. **Objetos:**
   - Definição de objetos com tipos específicos para suas propriedades (e.g., `const carro: {marca: string, modelo: string, anoFabricacao: number}`).
   - **Propriedades opcionais:** Permite que certas propriedades não sejam obrigatórias (e.g., `dono?: string`).

8. **Assinaturas de Índice:**
   - Para objetos sem propriedades definidas (e.g., `const nomeIdade: {[index: string]: number}`).

9. **Type Aliases (Apelidos de Tipo):**
   - Criação de tipos personalizados (e.g., `type AnoVeiculo = number`).

10. **Interfaces:**
   - Moldes para objetos (e.g., `interface`).

## Instalação rápida no VS Code para Treinamento

### Link do TS oficial
[TypeScript Download](https://www.typescriptlang.org/)

- `npm install typescript --save-dev`
- `npx tsc`
- `npx tsc --init`

**Descomentar:**
1. Descomentar a linha: `// "outDir": "./"`
2. Alterar para: `"outDir": "./build"`

**Após escrever o código para compilar em JavaScript:**
- `npx tsc -w` (O TS fica observando as alterações para compilar em JS)



