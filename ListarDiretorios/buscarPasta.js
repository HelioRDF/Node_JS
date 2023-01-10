const fs = require("fs");

let localApp = process.env.LOCALAPPDATA;
var files = fs.readdirSync(localApp);
let lista = files.filter((txt) =>
    txt.includes('blockchain')
);
lista.forEach(element => {
    console.log("\n--------------------------------")
   
    var blockchain = fs.readdirSync(localApp + '\\' + element);
    blockchain.forEach(appVersion => {
        try {
            if (appVersion.includes('app-')) {
                let initDir=localApp+'\\'+element+'\\'+appVersion;
                let finalDir="\\resources\\app.asar.unpacked\\daemon"
                let fullDir = initDir+finalDir;
                var pathF = fs.readdirSync(fullDir);
                console.log(fullDir)
                }
            
        } catch (error) {
            console.log("caminho não encontrado")
        }

    });
});


function comandoCMD(path) {
  //---
  }