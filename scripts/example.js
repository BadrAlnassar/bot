'use strict'

// Description:
//   Example scripts for you to examine and try out.
//
// Notes:
//   They are commented out by default, because most of them are pretty silly and
//   wouldn't be useful and amusing enough for day to day huboting.
//   Uncomment the ones you want to try and experiment with.
//
//   These are from the scripting documentation: https://github.com/github/hubot/blob/master/docs/scripting.md

module.exports = (robot) => {
//this method prints the  rules  of the slack group 
  var arrre = ["first : Have respect for each other",'secound : All ideas should be shared and considered ' , 'thired : Try to reach agreement, don’t just agree to differ']
   robot.hear(/rules/i, (res) => {
    for ( let i = 0 ; i<arrre.length ; i++)
      res.send(arrre[i])
    
  })
  
  //this methos will take an input as a nationality and for that it will prints .
  robot.respond(/hello I am (.*)/i, (res) => {
    const nationality = res.match[1];

    if(nationality == 'Arabic'){
      res.reply('مرحبا'); //it responds based on your nationality
    } else if(nationality == 'Spanish'){
      res.reply('Hola');
    } else if(nationality == 'chinese'){
      res.reply('你好')
    } else{
      res.reply('^_^ ahaaaaaaaaaa')
    }
})
//this method displays a random wolf images 

var backgroundImage = new Array(); 
backgroundImage[0] = "https://imgur.com/BMdwn8v";
backgroundImage[1] = "https://imgur.com/qUc77Ma";
backgroundImage[2] = "https://imgur.com/19KBoJq";

robot.hear(/give me a background image/i, (res) => {
  res.send(res.random(backgroundImage))
})


//this method will takes an input from users and will
  robot.respond(/search for (.*)/i, (res) => {
    const query = res.match[1]
  

    res.reply(`https://www.google.com.sa/search?q=${query}`)
  })


}
