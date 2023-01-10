const { stat } = require('fs');
const os = require('os');
const{freemem,totalmem}=os;



setInterval(()=>{
    const total = parseInt(totalmem()/1024/1024);
    const mem = parseInt(freemem()/1024/1024);
    const percentsUsage = parseInt(100-(mem/total*100));
    const percentsFree = parseInt((mem/total)*100);
    
    const stats={
        free: `${mem}MB - ${percentsFree}%`,
        total: `${total}MB`,
        usage: `${percentsUsage}%`
    }
    
    console.clear();
    console.table(stats)

},3000)
