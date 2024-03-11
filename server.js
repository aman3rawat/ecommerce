const app = require('./app');
const db = require("./db");

(async () => {
    await db();
    server = app.listen(process.env.PORT);
    server.on('error', () => process.exit(1));
    server.on('listening', () => {
        console.log('server is listening on port ', process.env.PORT)
    })
})()
