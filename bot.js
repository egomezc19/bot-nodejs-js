const {Telegraf} = require('telegraf');
const bot = new Telegraf('5451129468:AAGuG5H3mlPsXrk6cqGX5-hnDtPJBSdriH0');

bot.start((ctx) =>{
    console.log(ctx.from);
    console.log(ctx.chat);
    console.log(ctx.message);
    console.log(ctx.updateSubTypes);
    ctx.reply('Bienvenido ' +ctx.from.first_name+ ' ' +ctx.from.last_name);
    ctx.reply("Dx-Latam para servirte en tu transformacion de negocio");
})

bot.help((ctx) =>{
    ctx.reply("Help/Ayuda");
})

bot.settings((ctx) =>{
    ctx.reply("Settings/Ajustes");
})

bot.command(["mycommand", "Mycommand", "MYCOMMAND", "test"],(ctx) =>{
    ctx.reply('my custom command!!!');

})
//esta al pendiente al texto que el usuario tipee
bot.hears('computadoras', (ctx) => {
    ctx.reply("Hola vendo computadoras");
})

//cuando el usuario envie un stiker el bot devuelve este msj
bot.on('sticker', ctx =>{
    ctx.reply('ooh! te gustan los stickers');
})

//hace referencia por si se menciono a un usuario.
bot.mention('botFather', ctx =>{
    ctx.reply('has mencionado a alguien');
})

// no funciona colocando el codigo +502 de Guat.
bot.phone('5543-8371', ctx =>{
    ctx.reply('Este es tu numero');
})

bot.hashtag('programing', ctx =>{
    ctx.reply('hashtag!!');
})


bot.launch();