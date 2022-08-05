const fs = require('fs');
const {NodeSSH} = require('node-ssh');
const ssh = new NodeSSH();
const ssh1 = new NodeSSH();

module.exports = async function testRSDs(ip1,ip2){
    let MPLS = "";
    let INET1 = "";
    let INET2 = "";
    let config = {
        host: ip1,
        username: "",
        password:"",
        port:""
    } 

    return new Promise((resolve,reject)=>{
        ssh.connect(config)
        .then(function (){
            ssh.execCommand("ping 8.8.8.8 -c 5", {})
            .then(function(result) {
                let log = result.stdout;
            });
            ssh.execCommand("ping 8.8.8.8 -c 5", {})
            .then(function(result) {
                let intDesc = result.stdout;
            });
            ssh.execCommand("ping 8.8.8.8 -c 5", {})
            .then(function(result) {
                let bgpSumm = result.stdout;
                ssh.execCommand("ping 8.8.8.8 -c 5", {})
                .then(function(result) {
                    MPLS = result.stdout;
                    ssh.execCommand("ping 8.8.8.8 -c 5", {})
                    .then(function(result) {
                        INET2 = result.stdout;
                        ssh.dispose();
                        console.log("\n****Realizado teste em RSD1****\n");
                    });
                });
            });
        }).catch(() => {console.log("****Não foi possivel conectar via SSH****")});

        config.host = ip2;

        ssh1.connect(config)
        .then(function (){
            ssh1.execCommand("ping 8.8.8.8 -c 1", {})
            .then(function(result) {
                let log = result.stdout;
            });
            ssh1.execCommand("show int desc", {})
            .then(function(result) {
                let intDesc = result.stdout;
            });
            ssh1.execCommand("ping 8.8.8.8 -c 2", {})
            .then(function(result) {
                let bgpSumm = result.stdout;
                ssh1.execCommand("ping 8.8.8.8 -c 2", {})
                .then(function(result) {
                    INET1 = result.stdout;
                    ssh1.dispose();
                    console.log("\n****Realizado teste em RSD2****\n");
                });
            });
        }).catch(() => {console.log("****Não foi possivel conectar via SSH****")});
        
        setInterval(()=>{
            if (MPLS != "" && INET1 != "" && INET2 != "")
            resolve({MPLS,INET1,INET2});
        },5000)
        setTimeout(()=>{
            reject("*****Tempo excedido*****");
        },25000)
    });
}

























/*
ssh.connect(config)
.then(function (){
    console.log("****Sucesso na conexão****");
    ssh.execCommand("show log", {})
    .then(function(result) {
        let log = result.stdout;
    })
    ssh.execCommand("show int desc", {})
    .then(function(result) {
        let intDesc = result.stdout;
    })
    ssh.execCommand("show bgp summ", {})
    .then(function(result) {
        let bgpSumm = result.stdout;
        ssh.execCommand("ping ", {})
        .then(function(result) {
            MPLS = result;
            ssh.execCommand("ping ", {})
            .then(function(result) {
                INET2 = result;
                ssh.dispose();
                console.log("\n****Conexão finalizada****\n");
            });
        });
    });
}).catch(() => {console.log("****Não foi possivel conectar via SSH****")});

config.host = ip2;

ssh1.connect(config)
.then(function (){
    console.log("****Sucesso na conexão****");
    ssh1.execCommand("show log", {})
    .then(function(result) {
        let log = result.stdout;
    })
    ssh1.execCommand("show int desc", {})
    .then(function(result) {
        let intDesc = result.stdout;
    })
    ssh1.execCommand("show bgp summ", {})
    .then(function(result) {
        let bgpSumm = result.stdout;
        ssh1.execCommand("ping ", {})
        .then(function(result) {
            INET1 = result;
            ssh1.dispose();
            console.log("\n****Conexão finalizada****\n");
        });
    });

    setInterval(()=>{
        if (MPLS != "" && INET2 != "" && INET2 != "")
        resolve({MPLS,INET1,INET2});
    },5000)
    setTimeout(()=>{
        reject("*****Tempo excedido*****");
    })
}).catch(() => {console.log("****Não foi possivel conectar via SSH****")});
*/