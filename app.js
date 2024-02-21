const http = require('http')
const {readFile, writeFile} = require('fs')

readFile('./index.html', 'utf-8', (err, result) => {
    if (err) {
        return
    }
    console.log('Done')
    const server = http.createServer ((req,res) => {
        res.write(result)
        res.end
    })
    
    server.listen(5000)
});


