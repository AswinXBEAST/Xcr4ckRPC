var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Xcr4ck",
assets : {
large_image : "xcr4ck",
large_text : "Join Xcr4ck Now" // THIS WILL SHOW AS "Playing <Status>" from the outisde
},
buttons : [{label : "Join Discord" , url : "https://discord.gg/uNxCxQkJ2r"}]
}
})
})
client.login({ clientId : "855363756216680448" }).catch(console.error);