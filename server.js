const http = require('http')
const port = 3001
 
const server = http.createServer(function(req, res) {
    res.write("Hello World!")
    res.end()
})

server.listen(port, function(error) {
    if (error) {
        console.log("Something went wrong!")
    } else {
        console.log("Serve is listening on port " + port)
    }
})