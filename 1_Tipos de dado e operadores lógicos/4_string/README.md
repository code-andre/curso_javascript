# 📝 Strings e Valores Especiais em JavaScript

Este documento apresenta de forma clara a utilização de diferentes formas de **strings** (textos) em JavaScript, além de esclarecer a diferença entre escrever `"Infinity"` como texto e usar o valor especial `Infinity`.

---

## 📌 O que são Strings?

Strings são textos usados na programação. Em JavaScript, elas podem ser escritas com **aspas duplas**, **aspas simples** ou **crase**. Apesar de parecerem diferentes, todas são do tipo `string`.

---

## **💬 Formas de Escrever Strings**

### 🟦 Aspas Duplas `"..."`

*   **Descrição:** Forma tradicional de declarar uma string.
*   **Exemplo:** `"Oi, meu nome é André"`
*   **Tipo:** `string`

---

### 🟥 Aspas Simples `'...'`

*   **Descrição:** Também serve para declarar uma string. Útil quando o texto já contém aspas duplas.
*   **Exemplo:** `'Eu queria comprar um carro'`
*   **Tipo:** `string`

---

### 🟨 Crase `` `...` `` (Template String)

*   **Descrição:** Permite incluir variáveis e expressões dentro do texto usando `${}`.
*   **Exemplo:** `` `Teste` ``
*   **Tipo:** `string`

---

## ♾️ Diferença entre Texto `"Infinity"` e Valor `Infinity`

### 🔤 `"Infinity"` (com aspas)

*   **Descrição:** É apenas um texto que diz “Infinity”, **não** é tratado como um valor numérico.
*   **Tipo:** `string`

---

### 🔢 `Infinity` (sem aspas)

*   **Descrição:** É um valor especial numérico que representa o infinito.
*   **Tipo:** `number`

---

## **🧑‍💻 Explicação dos Elementos do Código**

`**typeof**`**:** Operador que mostra qual é o tipo do valor, como `string`, `number`, `boolean`, etc.

`**console.log**`**:** Comando usado para exibir informações no console do navegador ou terminal.

`**\n**` **(quebra de linha):** Caracter especial que pula uma linha no texto, melhorando a organização visual.

**Template strings:** Usadas com crases (`` ` ``), permitem criar textos com variáveis e quebras de linha usando `${}` e `\n`.