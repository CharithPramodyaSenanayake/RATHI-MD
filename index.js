const { Client } = require('./lib/client')
const { DATABASE, VERSION } = require('./config')
const start = async () => {
	try {
		const bot = new Client()
		console.log(`rathimd ${VERSION}`)
		await DATABASE.sync()
		console.log('Database syncing...')
		await bot.connect()
	} catch (error) {
		console.error(error)
	}
}
start()
