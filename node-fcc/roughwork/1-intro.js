//~ 17:36 fri apr29 wk17 2022
//~ Node JS tutorial

//~ console.log(`hello, world`);
//~ console.log(__dirname);
//~ console.log(__filename);
//~ console.log(require);
//~ console.log(module);
//~ console.log(process);

/* setInterval(() => {
	console.log(`suck my fruit`)
}, 5000)
*/

const josh = require('os');
const end = josh.endianness();
const net = josh.networkInterfaces();
const user = josh.userInfo();
const arch = josh.arch()
const tmem = josh.totalmem();
const fmem = josh.freemem();
const host = josh.hostname();
console.log(host);
console.log(4023296000/2);
console.log(2**10);

