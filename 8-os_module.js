const os = require('os')

// method returns user info
const user = os.userInfo()

console.log(user);

// this method returns the uptime of system in seconds
const uptime = os.uptime()
console.log(uptime)

const currentOs = {
    name:os.type(),
    usedmemory:os.freemem(),
    totalmemory:os.totalmem(),
    release:os.release()
}

console.log(currentOs);