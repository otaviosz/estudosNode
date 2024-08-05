// modulos externos
const inquirer = require("inquirer");
const chalk = require("chalk");

// modulos internos
const fs = require("fs");

function operation() {
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
    .then((resposta) => {
      const action = resposta["action"];

      if (action === "Criar conta") {
        createAccount();
      } else if (action === "Consultar Saldo") {
        getAccountBalance();
      } else if (action === "Depositar") {
        deposit();
      } else if (action === "Sacar") {
      } else if (action === "Sair") {
      }
    })
    .catch((err) => console.log(err));
}

// Create an account

function createAccount() {
  console.log(chalk.bgGreen.black("Parabéns por escolher o nosso banco!"));
  console.log(chalk.green("Defina as opções da sua conta a seguir"));

  buildAccount();
}

function buildAccount() {
  inquirer
    .prompt([
      {
        name: "accountName",
        message: "Digite um nome para sua conta:",
      },
    ])
    .then((resposta) => {
      const accountName = resposta["accountName"];

      console.info(accountName);

      if (!fs.existsSync("accounts")) {
        fs.mkdirSync("accounts");
      }

      if (fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(
          chalk.bgRed.black("Essa conta já existe, escolha outro nome"),
        );
        buildAccount();
      }

      fs.writeFileSync(
        `accounts/${accountName}.json`,
        '{"balance": 0}',
        function (err) {
          console.log(err);
        },
      );
      console.log(chalk.green("Parabéns, sua conta foi criada!"));
      operation();
    })
    .catch((err) => console.log(err));
}

// add an amount to user account
function deposit() {
  inquirer
    .prompt([
      {
        name: "accountName",
        message: "Qual o nome da sua conta?",
      },
    ])
    .then((answer) => {
      const accountName = answer["accountName"];

      if (!checkAccount(accountName)) {
        return deposit();
      }

      inquirer
        .prompt([
          {
            name: "amount",
            message: "Quanto você deseja depositar?",
          },
        ])
        .then((answer) => {
          const amount = answer["amount"];

          addAmount(accountName, amount);
          operation();
        });
    });
}

function checkAccount(accountName) {
  if (!fs.existsSync(`accounts/${accountName}.json`)) {
    console.log(
      chalk.bgRed.black("Esta conta não existe, escolha outro nome!"),
    );
    return false;
  }
  return true;
}

function getAccount(accountName) {
  const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
    encoding: "utf8",
    flag: "r",
  });

  return JSON.parse(accountJSON);
}

function addAmount(accountName, amount) {
  const accountData = getAccount(accountName);

  if (!amount) {
    console.log(
      chalk.bgRed.black("Ocorreu um erro, tente novamente mais tarde!"),
    );
    return deposit();
  }

  accountData.balance = parseFloat(amount) + parseFloat(accountData.balance);

  fs.writeFileSync(
    `accounts/${accountName}.json`,
    JSON.stringify(accountData),
    function (err) {
      console.log(err);
    },
  );

  console.log(
    chalk.green(`Foi depositado o valor de R$${amount} na sua conta!`),
  );
}

// show balance account

function getAccountBalance() {
  inquirer.prompt([
    {
      name: 'accountName',
      message: 'Qual o nome da sua conta?'
    }
  ]).then((resposta) => {

    const accountName = resposta['accountName']

    if(!checkAccount(accountName)){
      getAccountBalance();
    }

    const accountData = getAccount(accountName)

    console.log(chalk.bgBlue.black(`Olá, o saldo da sua conta é de R$${accountData.balance}`))
    operation();

  }).catch(err => console.log(err))
}


operation();
