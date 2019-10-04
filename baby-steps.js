var sum = 0;
process.argv.map((item,index) => {
    if(index > 1)
        sum += Number(item);        
})
console.log(sum) ;