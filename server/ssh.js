const { Client } = require('ssh2');
const ssh2 = new Client;

class ssh extends Client{
    async connection(config) {
        return new Promise ((resolve,reject) =>{
        this.on('ready',() => {}).connect(config);
        return this;
    }
} 
ssh2.on('ready', () => {}).connect(config);

ssh2.on('ready', () => {
    ssh2.shell((err, stream) => {
        if (err) throw err;
        stream.on('close', () => {
            console.log('Stream :: close');
            ssh2.end();
        })
        .on('data', (data) => {
        console.log("" + data);
        });
        stream.end('\nping 8.8.8.8 -c 10\n'+
                'ping 192.168.0.1 -c 1\n'+
                '');
    });
});