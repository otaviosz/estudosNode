const inquirer = require("inquirer");
const chalk = require("chalk");

inquirer
  .prompt([
    {
      name: "p1",
      message: "Qual o seu nome?",
    },
    {
      name: "p2",
      message: "Qual a sua idade?",
    },
  ])
  .then((respostas) => {
    console.log(chalk.bgYellow.black.bold(`O usuário se chama ${respostas.p1} e tem ${respostas.p2} anos.`))
  })
  .catch((err) => console.log(err));


// Tarefa do Instrutor

// const inquirer = require('inquirer')
// const chalk = require('chalk')

// inquirer
//   .prompt([
//     { name: 'nome', message: 'Qual o seu nome?' },
//     { name: 'idade', message: 'Qual a sua idade?' },
//   ])
//   .then((answers) => {
//     const response = `O nome do usuário é ${answers.nome} e ele tem ${answers.idade} anos`
//     console.log(chalk.bgYellow.black(response))
//   })
//   .catch((err) => {
//     console.log(err)
//   })