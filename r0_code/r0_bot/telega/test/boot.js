

const telegraph = require('telegraph-node')
const ph = new telegraph()

//Создание аккаунта:
ph.createAccount(short_name, options).then((resulr) => {
 console.log(result)
})

//Редактирование аккаунта
 ph.editAccountInfo(access_token, options).then((resulr) => {
 console.log(result)
})

//Получение информации о аккаунте:
 ph.getAccountInfo(access_token, options).then((resulr) => {
 console.log(result)
})

 //Перевыпуск токена
 ph.revokeAccessToken(access_token).then((resulr) => {
 console.log(result)
})

//Создание страницы:
 ph.createPage(access_token, title, content, options).then((resulr) => {
 console.log(result)
})

//Редактирование страницы
 ph.editPage(access_token, path, title, content, options).then((resulr) => {
 console.log(result)
})

//Получение список страниц
 ph.getPageList(access_token, options).then((resulr) => {
 console.log(result)
})

//Получение кол-во просмотра страницы:
ph.getViews(path, options).then((resulr) => {
 console.log(result)
})


const { Telegraf } = require('telegraf')
const bot = new Telegraf(process.env.BOT_TOKEN) //сюда помещается токен, который дал botFather
bot.start((ctx) => ctx.reply('Welcome')) //ответ бота на команду /start
bot.help((ctx) => ctx.reply('Send me a sticker')) //ответ бота на команду /help
bot.on('sticker', (ctx) => ctx.reply('')) //bot.on это обработчик введенного юзером сообщения, в данном случае он отслеживает стикер, можно использовать обработчик текста или голосового сообщения
bot.hears('hi', (ctx) => ctx.reply('Hey there')) // bot.hears это обработчик конкретного текста, данном случае это - "hi"
bot.launch() // запуск бота

