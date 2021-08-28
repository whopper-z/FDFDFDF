const fs = require("fs");
const chalk = require("chalk");
const Discord = require("discord.js");

  console.log(`Herşey tamam. Aktif edici başlıyor...`)

let tokens = fs.readFileSync('./tokens.txt', 'utf-8').split("\n");

setInterval(function() {
  
 tokens.forEach(async (token) => {
 
 let user = new Discord.Client();

  await user.login(token).catch(err => { 
 if(err) {
  return console.log(chalk.red(`[Error] `) +  `Token geçersiz yada doğrulamaya düşmüş.`) 
   } else {
  console.log(chalk.green(`[Online] `) +  `${token}`)
  }
 })
})

}, 10000)
