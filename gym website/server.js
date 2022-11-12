const fs  = require('fs')

const http = require('http')

const Home = fs.readFileSync('./home.html','utf-8')
const Contect = fs.readFileSync('./contact.html','utf-8')
const About = fs.readFileSync('./about.html','utf-8')
const Plans = fs.readFileSync('./plans.html','utf-8')
const Error = fs.readFileSync('./defaultpage.html','utf-8')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end(Home)
        return
    }
    if(req.url === '/home'){
        res.end(Home)
        return
    }
    if(req.url === '/contact'){
        res.end(Contect)
        return
    }
    if(req.url === '/about'){
        res.end(About)
        return
    }
    if(req.url === '/plans'){
        res.end(Plans)
        return
    }
    res.end(Error)

})

server.listen(5000)