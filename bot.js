const Discord = require('discord.js');
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
var sizes = ["551373101229932564", "551373117021356033", "551373131634442240","558007776446775298", "558007793215471645", "558007804137570334"]
var sizesm = ["551374007283220480", "551375056144695325", "551375468121817119", "558008460160139266", "558008478833180677", "558007804137570334"]
const TelegramBot = require('node-telegram-bot-api');
 //const idserver = require("./idserver.json")
// const idchannel = require("./idchannel.json")
// replace the value below with the Telegram token you receive from @BotFather


// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(process.env.TELETOK, {polling: true, } );

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message
 
  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"
  console.log(chatId)
  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('channel_post', (msg) => {
    console.log("fd")
     
           client2.guilds.get("351491707554103296").channels.get("551384140268699648").fetchMessage("551384747365105674")
           .then(msgb => {
            console.log(msgb.content)
               if(msgb.content == "1")
               {
                console.log("podt")
                   const chatId = msg.chat.id;
      client2.guilds.get("351491707554103296").channels.get("558694177928380419").fetchMessage("558694659686137867")
                .then(msgt => {
       var ser = msgt.content
        client2.guilds.get("351491707554103296").channels.get("558694177928380419").fetchMessage("558694670906163210")
                .then(msgc => {
         var ch1 = msgc.content
                   if(msg.photo != undefined)
                   {
                       var id = msg.photo[msg.photo.length - 1].file_id
                       console.log(msg.photo)
                       bot.getFile(id).then(sf=>{
    console.log(sf.file_path)
})
                       bot.getFileLink(id).then(sd=>  {
                        console.log(sd)
                          console.log(msg.caption)
                           if(msg.caption == undefined)
                           {
                               var embeds = new Discord.RichEmbed()
                               .setImage(sd)
                               client.guilds.get(ser).channels.get(ch1).send(embeds)
                           }
                         else
                         {
                           var embeds = new Discord.RichEmbed()
                           .setImage(sd)
                           .setDescription(msg.caption)
                           client.guilds.get(ser).channels.get(ch1).send(embeds)
                         }
                       
                         })
                   }
                   else
                   {
                       client.guilds.get(ser).channels.get(ch1).send(msg.text)
                   }
        })
      })
                   
                     
                   
                    }
            else
             {
              console.log("nopodr")
              }
                   })
      
    
     // send a message to the chat acknowledging receipt of their message
   
   });


var fs = require("fs");

function commandIs(str, msg){
    return msg.content.toLowerCase().startsWith("!" + str);
}
function commandIs2(str, msg){
    return msg.content.toLowerCase().startsWith("-" + str);
}
function pluck(array) {
    return array.map(function(item) { return item["name"]; });
}

function hasRole(mem, role)
{
    if (pluck(mem.roles).includes(role))
    {
        return true;
    }
    else
    {
        return false;
    }
}
function getRandomInt(min, max)
{

  return Math.floor(Math.random() * (max - min + 1)) + min;

}
client2.on("ready", n =>{

    client2.setInterval(function play()
    {
     
        var acc;
        client2.guilds.get("351491707554103296").channels.get("551377626833485844").fetchMessage("551384449116274690")
        .then(msg => {
            if(msg.content == "1")
            {
                client2.guilds.get("351491707554103296").channels.get("551375947203346433").fetchMessage("551376494169948161")
                .then(msg2 => {
                    console.log(msg2.content)
                    var siz = parseInt(msg2.content)
                  if(siz == 1)
                  {
                    client2.guilds.get("351491707554103296").channels.get("551373101229932564").fetchMessage("551374007283220480")
                    .then(msg3 => {
                        client2.guilds.get("351491707554103296").channels.get("558021855810682881").fetchMessage("558021902371913743")
                .then(msgt => {
       var ser = msgt.content
        client2.guilds.get("351491707554103296").channels.get("558021855810682881").fetchMessage("558021912127733848")
                .then(msgc => {
         var ch1 = msgc.content
                        var spl = msg3.content.split(":")
                        var h = parseInt(spl[0])
                        var m = parseInt(spl[1])
                        var date = new Date()
                        var dh = parseInt(date.getHours()) + 3
                        var dm = date.getMinutes()
                        if(dh>=24)
                        {
                           dh = dh - 24
                        }
                        if(dh == h && dm == m )
                        {
                            console.log(parseInt(date.getHours()) + 3)
                            console.log(client.guilds.get(ser).name + ":"+client.channels.get(ch1).name)
                            console.log("yah")
                            var urle = "http://uo.theabyss.ru";
                var cheerio = require('cheerio');
                var request = require('request');
          
                request(urle, function (error, response, body) {
                  if (!error) {
                    
                    var $ = cheerio.load(body)
              var name = $("#servers3 > table > tbody > tr:nth-child(3) > td.servName").text()
              var online = $('#servers3 > table > tbody > tr:nth-child(3) > td:nth-child(2)').text()
              var status = "http://uo.theabyss.ru/"+$("#servers3 > table > tbody > tr:nth-child(3) > td:nth-child(3) > img").attr("src")
              var embed = new Discord.RichEmbed()
              .addField("Текущий online на сервере:",online)
           
              client.guilds.get(ser).channels.get(ch1).send(embed)
                  }})
                        }
                    })
                })
                    })
                  }
                  if(siz == 2)
                  {
                      for(i=0;i<2;i++)
                      {
                        client2.guilds.get("351491707554103296").channels.get(sizes[i]).fetchMessage(sizesm[i])
                        .then(msg3 => {
                            client2.guilds.get("351491707554103296").channels.get("558021855810682881").fetchMessage("558021902371913743")
                            .then(msgt => {
                   var ser = msgt.content
                    client2.guilds.get("351491707554103296").channels.get("558021855810682881").fetchMessage("558021912127733848")
                            .then(msgc => {
                     var ch1 = msgc.content
                            var spl = msg3.content.split(":")
                            var h = parseInt(spl[0])
                            var m = parseInt(spl[1])
                            var date = new Date()
                             var dh = parseInt(date.getHours()) + 3
                        var dm = date.getMinutes()
                        if(dh>=24)
                        {
                           dh = dh - 24
                        }
                            if(dh == h && dm == m )
                            {
                                console.log("yah")
                                var urle = "http://uo.theabyss.ru";
                    var cheerio = require('cheerio');
                    var request = require('request');
              
                    request(urle, function (error, response, body) {
                      if (!error) {
                        
                        var $ = cheerio.load(body)
                  var name = $("#servers3 > table > tbody > tr:nth-child(3) > td.servName").text()
                  var online = $('#servers3 > table > tbody > tr:nth-child(3) > td:nth-child(2)').text()
                  var status = "http://uo.theabyss.ru/"+$("#servers3 > table > tbody > tr:nth-child(3) > td:nth-child(3) > img").attr("src")
                  var embed = new Discord.RichEmbed()
                  .addField("Текущий online на сервере:",online)
                  
                  client.guilds.get(ser).channels.get(ch1).send(embed)
                      }})
                            }
                        })
                    })
                        })
                      }
                  }
                  if(siz == 3)
                  {
                    for(i=0;i<3;i++)
                    {
                      client2.guilds.get("351491707554103296").channels.get(sizes[i]).fetchMessage(sizesm[i])
                      .then(msg3 => {
                          console.log(msg3.content)
                        client2.guilds.get("351491707554103296").channels.get("558021855810682881").fetchMessage("558021902371913743")
                        .then(msgt => {
                            console.log(msgt.content)
               var ser = msgt.content
                client2.guilds.get("351491707554103296").channels.get("558021855810682881").fetchMessage("558021912127733848")
                        .then(msgc => {
                            console.log(msgc.content)
                 var ch1 = msgc.content
                          var spl = msg3.content.split(":")
                          var h = parseInt(spl[0])
                          var m = parseInt(spl[1])
                          var date = new Date()
                           var dh = parseInt(date.getHours()) + 3
                        var dm = date.getMinutes()
                        if(dh>=24)
                        {
                           dh = dh - 24
                        }
                          if(dh == h && dm == m )
                          {
                              console.log("yah")
                              var urle = "http://uo.theabyss.ru";
                  var cheerio = require('cheerio');
                  var request = require('request');
            
                  request(urle, function (error, response, body) {
                    if (!error) {
                      
                      var $ = cheerio.load(body)
                var name = $("#servers3 > table > tbody > tr:nth-child(3) > td.servName").text()
                var online = $('#servers3 > table > tbody > tr:nth-child(3) > td:nth-child(2)').text()
                var status = "http://uo.theabyss.ru/"+$("#servers3 > table > tbody > tr:nth-child(3) > td:nth-child(3) > img").attr("src")
                var embed = new Discord.RichEmbed()
                .addField("Текущий online на сервере:",online)
             
                client.guilds.get(ser).channels.get(ch1).send(embed)
                    }})
                          }
                        })
                    })
                      })
                    }
                  }
                  if(siz == 4)
                  {
                    for(i=0;i<4;i++)
                    {
                      
                        
                      client2.guilds.get("351491707554103296").channels.get(sizes[i]).fetchMessage(sizesm[i])
                      .then(msg3 => {
                        client2.guilds.get("351491707554103296").channels.get("558021855810682881").fetchMessage("558021902371913743")
                        .then(msgt => {
               var ser = msgt.content
                client2.guilds.get("351491707554103296").channels.get("558021855810682881").fetchMessage("558021912127733848")
                        .then(msgc => {
                 var ch1 = msgc.content
                          var spl = msg3.content.split(":")
                          var h = parseInt(spl[0])
                          var m = parseInt(spl[1])
                          var date = new Date()
                           var dh = parseInt(date.getHours()) + 3
                        var dm = date.getMinutes()
                        if(dh>=24)
                        {
                           dh = dh - 24
                        }
                          if(dh == h && dm == m )
                          {
                            console.log(parseInt(date.getHours()) + 3)
                            console.log(client.guilds.get(ser).name + ":"+client.channels.get(ch1).name)
                              console.log("yah")
                              var urle = "http://uo.theabyss.ru";
                  var cheerio = require('cheerio');
                  var request = require('request');
            
                  request(urle, function (error, response, body) {
                    if (!error) {
                      
                      var $ = cheerio.load(body)
                var name = $("#servers3 > table > tbody > tr:nth-child(3) > td.servName").text()
                var online = $('#servers3 > table > tbody > tr:nth-child(3) > td:nth-child(2)').text()
                var status = "http://uo.theabyss.ru/"+$("#servers3 > table > tbody > tr:nth-child(3) > td:nth-child(3) > img").attr("src")
                var embed = new Discord.RichEmbed()
                .addField("Текущий online на сервере:",online)
             
                client.guilds.get(ser).channels.get(ch1).send(embed)
                    }})
                          }
                        })
                    })
                      })
                    }
                  }
                  if(siz == 5)
                  {
                    for(i=0;i<5;i++)
                    {
                      
                        
                      client2.guilds.get("351491707554103296").channels.get(sizes[i]).fetchMessage(sizesm[i])
                      .then(msg3 => {
                        client2.guilds.get("351491707554103296").channels.get("558021855810682881").fetchMessage("558021902371913743")
                        .then(msgt => {
               var ser = msgt.content
                client2.guilds.get("351491707554103296").channels.get("558021855810682881").fetchMessage("558021912127733848")
                        .then(msgc => {
                 var ch1 = msgc.content
                          var spl = msg3.content.split(":")
                          var h = parseInt(spl[0])
                          var m = parseInt(spl[1])
                          var date = new Date()
                           var dh = parseInt(date.getHours()) + 3
                        var dm = date.getMinutes()
                        if(dh>=24)
                        {
                           dh = dh - 24
                        }
                          if(dh == h && dm == m )
                          {
                              console.log("yah")
                              var urle = "http://uo.theabyss.ru";
                  var cheerio = require('cheerio');
                  var request = require('request');
            
                  request(urle, function (error, response, body) {
                    if (!error) {
                      
                      var $ = cheerio.load(body)
                var name = $("#servers3 > table > tbody > tr:nth-child(3) > td.servName").text()
                var online = $('#servers3 > table > tbody > tr:nth-child(3) > td:nth-child(2)').text()
                var status = "http://uo.theabyss.ru/"+$("#servers3 > table > tbody > tr:nth-child(3) > td:nth-child(3) > img").attr("src")
                var embed = new Discord.RichEmbed()
                .addField("Текущий online на сервере:",online)
             
                client.guilds.get(ser).channels.get(ch1).send(embed)
                    }})
                          }
                        })
                    })
                      })
                    }
                  }
                  if(siz == 6)
                  {
                    for(i=0;i<6;i++)
                    {
                      
                        
                      client2.guilds.get("351491707554103296").channels.get(sizes[i]).fetchMessage(sizesm[i])
                      .then(msg3 => {
                        client2.guilds.get("351491707554103296").channels.get("558021855810682881").fetchMessage("558021902371913743")
                        .then(msgt => {
               var ser = msgt.content
                client2.guilds.get("351491707554103296").channels.get("558021855810682881").fetchMessage("558021912127733848")
                        .then(msgc => {
                 var ch1 = msgc.content
                          var spl = msg3.content.split(":")
                          var h = parseInt(spl[0])
                          var m = parseInt(spl[1])
                          var date = new Date()
                           var dh = parseInt(date.getHours()) + 3
                        var dm = date.getMinutes()
                        if(dh>=24)
                        {
                           dh = dh - 24
                        }
                          if(dh == h && dm == m )
                          {
                              console.log("yah")
                              var urle = "http://uo.theabyss.ru";
                  var cheerio = require('cheerio');
                  var request = require('request');
            
                  request(urle, function (error, response, body) {
                    if (!error) {
                      
                      var $ = cheerio.load(body)
                var name = $("#servers3 > table > tbody > tr:nth-child(3) > td.servName").text()
                var online = $('#servers3 > table > tbody > tr:nth-child(3) > td:nth-child(2)').text()
                var status = "http://uo.theabyss.ru/"+$("#servers3 > table > tbody > tr:nth-child(3) > td:nth-child(3) > img").attr("src")
                var embed = new Discord.RichEmbed()
                .addField("Текущий online на сервере:",online)
             
                client.guilds.get(ser).channels.get(ch1).send(embed)
                    }})
                          }
                        })
                    })
                      })
                    }
                  }
                })
              /*  var urle = "http://uo.theabyss.ru";
                var cheerio = require('cheerio');
                var request = require('request');
          
                request(urle, function (error, response, body) {
                  if (!error) {
                    
                    var $ = cheerio.load(body)
              var name = $("#servers3 > table > tbody > tr:nth-child(3) > td.servName").text()
              var online = $('#servers3 > table > tbody > tr:nth-child(3) > td:nth-child(2)').text()
              var status = "http://uo.theabyss.ru/"+$("#servers3 > table > tbody > tr:nth-child(3) > td:nth-child(3) > img").attr("src")
              var embed = new Discord.RichEmbed()
              .addField(name,online)
              .setFooter("Status", status)
              client.guilds.get("351491707554103296").channels.get("551377626833485844").send(embed)
                  }})*/
            }
         
        })
   
    },58000)
})
client2.on("message", message =>
{
    if(commandIs2("ava", message))
    {
        var url = message.content.substring(5)
        const fs = require('fs');
const download = require('download');
var form;
 if(url.includes(".png"))
 {
     form = ".png"
 }
 else
 {
     form = ".jpg"
 }
download(url, './file').then(() => {
    console.log('done!');
    var file = fs.readdirSync("./file/")[0]
client.user.setAvatar("./file/"+file).then(()=>{
    client2.guilds.get("351491707554103296").channels.get("382058565776572417").send("-done +")
    fs.unlinkSync("./file/"+file)
    fs.rmdirSync("./file/")
})
});

 
    }

    if(commandIs("online", message))
    {
        var urle = "http://uo.theabyss.ru";
        var cheerio = require('cheerio');
        var request = require('request');
  
        request(urle, function (error, response, body) {
          if (!error) {
            
            var $ = cheerio.load(body)
      var name = $("#servers3 > table > tbody > tr:nth-child(3) > td.servName").text()
      var online = $('#servers3 > table > tbody > tr:nth-child(3) > td:nth-child(2)').text()
      var status = "http://uo.theabyss.ru/"+$("#servers3 > table > tbody > tr:nth-child(3) > td:nth-child(3) > img").attr("src")
      var embed = new Discord.RichEmbed()
      .addField(name,online)
      .setFooter("Status", status)
      message.channel.send(embed)
          }})
    
    }
   
})
client.on("message", message =>
{
  if(commandIs("online", message))
    {
        var urle = "http://uo.theabyss.ru";
        var cheerio = require('cheerio');
        var request = require('request');
  
        request(urle, function (error, response, body) {
          if (!error) {
            
            var $ = cheerio.load(body)
      var name = $("#servers3 > table > tbody > tr:nth-child(3) > td.servName").text()
      var online = $('#servers3 > table > tbody > tr:nth-child(3) > td:nth-child(2)').text()
      var status = "http://uo.theabyss.ru/"+$("#servers3 > table > tbody > tr:nth-child(3) > td:nth-child(3) > img").attr("src")
     var embed = new Discord.RichEmbed()
              .addField("Текущий online на сервере:",online)
      message.channel.send(embed)
          }})
    
    }
})
client.on("message", message =>
{
    if(message.author.bot) return;
    if(message.content.startsWith("!"))
    {
        var cmd = message.content.split("!")[1]
    console.log(cmd +" wow")
    if(cmd.split(cmd)[1] == "")
    {
        cmd = cmd
    }
    else
    {
        cmd = cmd.split(" ")[0]
    }
    
    client3.guilds.get("351491707554103296").channels.get("559693081113264135").fetchMessage("559694168432181259")
    .then(ms=>{
      var con = ms.content.split("&")
      if(con.includes(cmd))
      {
        client3.guilds.get("351491707554103296").channels.get("559693081113264135").fetchMessage("559694180062986250")
        .then(mse=>{
            client3.guilds.get("351491707554103296").channels.get("559693081113264135").fetchMessage("561816369620975616")
            .then(mst=>{
          var mseg = mse.content.split("&")[con.indexOf(cmd)]
             var type = mst.content.split("&")[con.indexOf(cmd)]
             console.log(type)
             if(type == "0")
             {
                 message.member.send(mseg)
             }
             if(type == "2")
             {
                message.channel.send(mseg)
             }
        else
        {
            var server = type.split(":")[0]
            var chl = type.split(":")[1]
            if(message.channel.id != chl) return;
            client.guilds.get(server).channels.get(chl).send(mseg)
        }
            })
        })
      }
    }) 
    }
   
})
client.on('guildMemberAdd', member => {

  // Send the message to a designated channel on a server:
 client2.guilds.get("351491707554103296").channels.get("561126720959283210").fetchMessage("561127057623613462")
 .then(msg=>{
   client2.guilds.get("351491707554103296").channels.get("561257588075790336").fetchMessage("561257609915662356")
 .then(msg2=>{
  if(msg2.content== "0")
  {
member.send(msg.content)
  }
    else
    {
      client2.guilds.get("351491707554103296").channels.get("561257588075790336").fetchMessage("561257965995294731")
 .then(sed=>{
        client2.guilds.get("351491707554103296").channels.get("561257588075790336").fetchMessage("561257973482258472")
 .then(chd=>{
         console.log(sed)
       client.guilds.get(sed.content).channels.get(chd.content).send("<@"+member.id+">"+msg.content)
        })
      })
    }
    
   })
 })
});
client.login(process.env.TOKENDIS1); 
client2.login(process.env.TOKENDIS2);
client3.login(process.env.TOKENDIS3)//вход для бота
