const app = require('./App.js')
require('dotenv/config')

const PORT = process.env.PORT;

app.listen(PORT, () => {
    return console.log(`App on in port ${PORT}`)
})