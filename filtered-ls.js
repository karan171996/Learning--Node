const fs = require('fs')
var match = process.argv[3];
fs.readdir(process.argv[2],function(err ,data){
    if(err) throw err;
     data.toString().split(',').filter(item =>{
        let data = item.split('.');
        if(data[1] === match){
            console.log(item);
        }
    })
})