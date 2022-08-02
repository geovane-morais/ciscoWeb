const express = require('express');
const path = require('path');
const application = express();
const favicon = require('serve-favicon');
const port = 3333;

const bodyParser = require('body-parser');

const {ssh, commands} = require('./ssh');
let config = {host:"",username:"",password:"",port:""} 


application.use(favicon(path.join(__dirname,'/../react/public/favicon.ico')));
application.use(bodyParser.urlencoded({ extended:true }));


application.get('/connection/agencia/:agencia', (req,res,next) => {
    console.log('Acesso get realizado com sucesso')

    if (req.params.agencia){
        config = {
            host:"",
            username:"",
            password:"",
            port:""
        } 
    }

    ssh.connect(config)
    .then(function (){
        console.log("****Sucesso na conexão****");
        commands("ping 8.8.8.8 -c 5");
        setTimeout(function (){
            ssh.dispose();
            console.log("\n****Conexão finalizada****\n");
        },10000);
    }).catch(() => {console.log("****Não foi possivel conectar via SSH****")});

    res.send(Object.values({con:"Conexão completa com server NODE"}));
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