const http = require('http')
const url = require('url')
const fs = require('fs')
const express = require('express')
const configFile = require('./config.json')
const path = require('path')

// Express
var server = express()
// READ ALL FILES
const mainPage = fs.readFileSync('./html/main-page/main-page.html');
const htmlFolder = fs.readdirSync('./html');
console.log(htmlFolder)

// get all files and put them in arrays
const filesNames = []
for (i = 0; i < htmlFolder.length; i++) {
    filesNames.push(fs.readdirSync('./html/' + htmlFolder[i]))
};
console.log(filesNames)
// SERVER
// Server Ip and port from config file
const {serverIP} = configFile;
const serverPort = process.env.PORT || 8000
// Makes the neccesary files public
server.use(express.static(path.join(__dirname + '/public/styles')))
// Server Overview Page
server.get('/', (req, res) => {
    res.end(mainPage);
});
// HTML files
server.get('/html/*', (req, res) => {
    var { url } = req
    var url = url.split("/")
    console.log(url)
    if (htmlFolder.includes(url[2])) {
        var folderIndex = htmlFolder.indexOf(url[2])
        console.log("folderindex" + folderIndex)
        if (filesNames[folderIndex].includes(url[3])) {
            console.log('file found')
            var fileIndex = filesNames[folderIndex].indexOf(url[3])
            console.log(fileIndex)
            var fileLoaded = fs.readFileSync('./html/' + htmlFolder[folderIndex] + "/" + filesNames[folderIndex][fileIndex])
            res.end(fileLoaded)
        } else {
        res.writeHead(404)
        res.end("Page not Found")
        }
    } else {
        res.writeHead(404)
        res.end("Page not Found")
    }

})  
// Server Kenimatics Variable Calculator Page

// Server listening on port 8000
server.listen(serverPort, () => {
    console.log("Server listening on port " + serverPort);
});