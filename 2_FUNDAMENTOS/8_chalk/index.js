const chalk = require("chalk");



const nota = Math.floor(Math.random() * 11);

if (nota > 7) {
  console.log(chalk.green.bold(`Nota: ${nota}...Parabéns, você está aprovado!`));
} else {
  console.log(chalk.red.bold(`Nota: ${nota}...Você precisa fazer a prova de recuperação`));
}
