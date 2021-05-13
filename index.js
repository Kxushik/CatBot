const keepAlive = require("./server")
const Discord = require("discord.js")
const client = new Discord.Client()
let replies = ["meow","prr", "mrrrrrrrrrrawr", "mew", "rrrr", "e-e-e-e-e-e", "awr", "hiiiiiiiiiss", "mEEEwr", "aaaaaaaaaaaa"];

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
  let process = getRandomInt(10);
  console.log(process + "-"+msg.content);
  
  if (process < 1) {
    if(!msg.content.split("").includes("*")){
      msg.reply("*"+replies[getRandomInt(replies.length)]+"*");
    }
    
  }
  if(msg.content === "linda?"){
    msg.reply("Whats up big dog-- I mean *meow*");
  }
})

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const mySecret = process.env['TOKEN']
keepAlive()
client.login(mySecret)