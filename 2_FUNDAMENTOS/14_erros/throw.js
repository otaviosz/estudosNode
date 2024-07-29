const x = 1;

// checar se x é um numero

if (!Number.isInteger(x)) {
  throw new Error("O valor de x não é um numero inteiro!");
}

console.log("Continuando o código...");
