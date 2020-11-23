const http = require('http')
const url = require('url')
const fs = require('fs')
const express = require('express')
const configFile = require('./config.json')

// Express
var server = express()
// READ ALL FILES
const mainPage = fs.readFileSync('./html/main-page.html', 'utf-8')
const kenimaticsCalculator = fs.readFileSync('./kenimatics-calculator/kenimatics-calculator.html', 'utf-8')
const displacementVelocity = fs.readFileSync('./displacement-velocity/displacement-velocity.html')
const computerLearning = fs.readFileSync('./computer-learning/computer-learning.html')
const computerLearningPage2 = fs.readFileSync('./computer-learning/computer-learning-page-2.html')
// SERVER
// Server Ip and port from config file
const {serverIP} = configFile;
const serverPort = process.env.PORT || 8000
// Makes the neccesary files public
server.use(express.static('public'));
server.use(express.static('kenimatics-calculator'))
server.use(express.static('displacement-velocity'))
server.use(express.static('computer-learning'))
// Server Overview Page
server.get('/', (req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.end(mainPage);
});

// Server Kenimatics Variable Calculator Page
server.get("/kenimatics-calculator", (req, res) => {
    res.writeHead(200, {'content-type': 'text/html'});
    res.end(kenimaticsCalculator);
});

// Server displacement-velocity calculator page
server.get("/displacement-velocity", (req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.end(displacementVelocity);
})
// Server secret page
server.get("/secret", (req, res) => {
    res.writeHead(200, {'content-type': "text/plain"});
    res.end("Very Secret :p");
});
//Server comptuer applications learning main page
server.get("/computer-learning", (req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.end(computerLearning);
});
//Server computer applications 2nd page
server.get("/computer-learning-page-2", (req, res) => {
    res.writeHead(404, {'content-type': 'text/html'});
    res.end(computerLearningPage2);
});

// Throwing an error if anything other than other pages
server.get('*', (req, res) => {
    res.writeHead(404, {'content-type': 'text/plain'});
    res.end("Page not found")
});

// Server listening on port 8000
server.listen(serverPort, () => {
    console.log("Server listening on port " + serverPort);
});