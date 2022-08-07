const express = require('express');
const path = require('path');
const application = express();
const favicon = require('serve-favicon');
const port = 3333;
const bodyParser = require('body-parser');

const fs = require('fs');
const {NodeSSH} = require('node-ssh');
const ssh = new NodeSSH();

const testRSDs = require('./tests');


application.use(favicon(path.join(__dirname,'/../react/public/favicon.ico')));
application.use(bodyParser.urlencoded({ extended:true }));


application.get('/connection/agencia/:agencia', (req,res,next) => {
    let objRes = {};
    let response = [];

    

    testRSDs("127.0.0.1","127.0.0.1")
    .then((result) =>{
        console.log("\n***AGENCIA: ",req.params.agencia)
        result.agencia = req.params.agencia;
        res.send(result);
        console.log("\nEnviado para o front\n");
    }).catch((err)=>{
        console.log(err);
        res.agencia(result.agencia = req.params.agencia);
    });
});


application.get('/public/:id', (req,res,next) => {
    try {
        res.sendFile(path.join(__dirname,`/../react/public/${req.params.id}`));
    } catch (error) {
        console.log("Solicitação invalida para /public");
    }
});

application.get('/testAuto', (req,res,next) => {
    res.sendFile(path.join(__dirname,'/../react/public/testAuto.html'));
});
application.get('/testMan', (req,res,next) => {
    res.sendFile(path.join(__dirname,'/../react/public/testMan.html'));
});
application.get('/', (req,res,next) => {
    res.sendFile(path.join(__dirname,'/../react/public/menu.html'));
});

application.listen(port,()=>{
    console.log(`\n****App rodando na porta:${port}****\n`);
});