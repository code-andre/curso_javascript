# 🧵 Strings Avançadas em JavaScript

Este documento explora usos mais avançados de **strings (textos)** em JavaScript, como quebras de linha com `\n`, uso de aspas combinadas, **template strings** com expressões, e **concatenação** de textos com o operador `+`.

---

## 📌 O que são Strings Avançadas?

São formas mais sofisticadas de trabalhar com texto, indo além da simples declaração. Com elas, é possível criar textos mais dinâmicos, organizados e personalizados dentro do código.

---

## **🔠 Exemplos Avançados de Strings**

### ↩️ `\n` — Quebra de Linha

*   **Descrição:** O `\n` dentro de uma string representa uma quebra de linha, ou seja, faz o texto continuar na linha de baixo.
*   **Exemplo:**  
    `"Primeira linha\nSegunda linha"`  
    Resultado:
*   **Tipo:** `string`

---

### 🗣️ Mistura de Aspas Simples e Duplas

**Descrição:** É possível misturar aspas simples e duplas para evitar erros ou escapar caracteres. Isso é útil quando uma string já contém aspas internas.

**Exemplo com aspas simples por fora:** `'O meu nome é "André"'`

**Exemplo com aspas duplas por fora:** `"O meu nome é 'André'"`

**Tipo:** `string` (em ambos os casos)

---

### 📐 Interpolação com Template String (Crase)

*   **Descrição:** As template strings (usando crase `` ` ``) permitem \*\*inserir expressões ou cálculos\*\* diretamente no texto com `${}`.
*   **Exemplo:**  
    `` `A multiplicação de 5 por 3 é ${5 * 3}` ``  
    Resultado: `A multiplicação de 5 por 3 é 15`
*   **Tipo:** `string`

---

### ➕ Concatenação de Strings com `+`

*   **Descrição:** O operador `+` pode ser usado para juntar (concatenar) várias strings em uma só.
*   **Exemplo:**  
    `"O " + "meu " + "nome " + "é " + "André"`  
    Resultado: `O meu nome é André`
*   **Tipo:** `string`

---

## **🧑‍💻 Explicação dos Elementos do Código**

`**\n**`**:** Símbolo especial de quebra de linha dentro de uma string.

**Aspas misturadas:** Forma prática de incluir aspas internas sem erro de sintaxe.

**Template strings:** Permitem criar textos com variáveis e cálculos embutidos usando crases e `${}`.

**Concatenação com** `**+**`**:** Junta pedaços de texto de forma manual.

`**typeof**`**:** Comando que retorna o tipo do valor. Neste caso, sempre retorna `"string"`.