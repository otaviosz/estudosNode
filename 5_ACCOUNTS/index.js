// modulos externos
const inquirer = require("inquirer");
const chalk = require("chalk");

// modulos internos
const fs = require("fs");

function Operation() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "O que você deseja fazer?",
        choices: [
          "Criar conta",
          "Consultar Saldo",
          "Depositar",
          "Sacar",
          "Sair",
        ],
      },
    ])
    .then(resposta => {
      const action = resposta['action']
      
      if (action === 'Criar conta'){
        createAccount();
      }

    })
    .catch((err) => console.log(err));
}


// Create an account

function createAccount(){
  console.log(chalk.bgGreen.black('Parabéns por escolher o nosso banco!'))
  console.log(chalk.green('Defina as opções da sua conta a seguir'))
}


Operation();
