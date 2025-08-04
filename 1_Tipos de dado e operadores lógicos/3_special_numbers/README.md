# 🔢 Números Especiais em JavaScript

Este documento apresenta de forma clara e objetiva os principais **números especiais** utilizados em JavaScript. Esses valores representam resultados fora do comum em cálculos, como divisões por zero ou operações inválidas.

---

## 📌 O que são números especiais?

Números especiais são valores que não se comportam como números comuns em JavaScript. Eles aparecem quando o resultado de uma operação matemática não é definido ou vai além dos limites da linguagem. Os principais são: `Infinity`, `-Infinity` e `NaN`.

---

## **🔍 Principais Números Especiais**

### ♾️ `Infinity` — Infinito positivo

*   **Descrição:** Representa um valor maior do que qualquer outro número.
*   **Exemplo:** Resulta de divisões como `1 / 0` → `Infinity`

---

### 🔁 `-Infinity` — Infinito negativo

*   **Descrição:** Representa um valor menor do que qualquer outro número.
*   **Exemplo:** Resulta de `-1 / 0` → `-Infinity`

---

### ❓ `NaN` — Not a Number

*   **Descrição:** Representa algo que não é um número válido.  
    Geralmente aparece quando fazemos uma operação matemática inválida, como dividir uma letra por um número.
*   **Exemplo:** `0 / "a"` ou `Math.sqrt(-1)` → `NaN` _\- Retorna a raiz quadrada_

---

## **🧑‍💻 Explicação dos Elementos do Código**

`**typeof**`**:** Operador que retorna o tipo do valor. Por exemplo, `typeof(Infinity)` retorna `"number"`, mesmo sendo um valor especial.

`**console.log**`**:** Comando que exibe mensagens ou resultados no console do navegador ou do terminal.

`**\n**` **(quebra de linha):** Caracter especial que cria uma nova linha no texto, deixando o resultado mais organizado.