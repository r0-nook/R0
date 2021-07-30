// const telegraph = require('telegraph-node')
// const ph = new telegraph()

const TelegramBot = require('node-telegram-bot-api');
const token = '1876997710:AAFFQQwgWtqf5hGnqlFgxFBMKKpc4IfV9Co';
const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Привет, Друг!');
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendPhoto(chatId, 'derpixon.jpg');
});

// Конфиг клавиатуры
const keyboard = [
  [
    {
      text: 'Хочу кота', // текст на кнопке
      callback_data: 'moreKeks' // данные для обработчика событий
    }
  ],
  [
    {
      text: 'Хочу песика',
      callback_data: 'morePes'
    }
  ],
  [
    {
      text: 'Хочу проходить курсы',
      url: 'https://htmlacademy.ru/courses' //внешняя ссылка
    }
  ]
];

// Обработчик нажатий на клавиатуру
bot.on('callback_query', (query) => {
  const chatId = query.message.chat.id;

  let img = '';

  if (query.data === 'moreKeks') { // если кот
    img = 'keks.png';
  }

  if (query.data === 'morePes') { // если пёс
    img = 'pes.png';
  }

  if (img) {
    bot.sendPhoto(chatId, img, { // прикрутим клаву
      reply_markup: {
        inline_keyboard: keyboard
      }
    });
  } else {
    bot.sendMessage(chatId, 'Непонятно, давай попробуем ещё раз?', {
      // прикрутим клаву
      reply_markup: {
        inline_keyboard: keyboard
      }
    });
  }
});