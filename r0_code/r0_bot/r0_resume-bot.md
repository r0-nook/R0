0. botfather.
1. /newbot
2. name...bot
3. name...bot
	token
4. npm init -y
5. npm i node-telegram-bot-api nodemon
6. 
index.js
const r0_TlgmApi = require('node-telegram-bot-api')
const token = '1813457410:AAFvjyZnIcW7j9IJJw9C4jqPCLyC6JQDdTs';
const bot = new r0_TlgmApi(token, {polling: true})
bot.on('message', msg => {})

package.json
	"dev": "nodemon index.js",
	"start": "node index.js"
7. 
index.js
	const bot = new r0_TlgmApi(token, {polling: true})
	bot.on('message', msg => {console.log(msg)})
 F:\r0\r0_act\r0_bot\telega\r0_bot-test-1>
8. npm run dev
9. вынести из index.js в  options.js
		module.exports = {
10. new rep git init add commit remote push log pass
11. cloud