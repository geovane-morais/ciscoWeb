const fs = require('fs');
const {NodeSSH} = require('node-ssh');
const ssh = new NodeSSH();

function commands(comm){
    ssh.execCommand(comm, {})
    .then(function(result) {
        console.log(result.stdout);
        console.log(result.stderr);
    }).catch(error => console.log(error));
}

module.exports = { ssh, commands }; 

/*
ssh.execCommand("ping 8.8.8.8 -c 5", {
    onStdout(chunk) {
        console.log('stdoutChunk', chunk.toString('utf8'))
    },
    onStderr(chunk) {
        console.log('stderrChunk', chunk.toString('utf8'))
    }
}).then(() => {
    ssh.dispose();
});

ssh.exec("ping 8.8.8.8", ["-c 5"], { 
    onStdout(chunk) {
        console.log('stdoutChunk', chunk.toString('utf8'))
    },
    onStderr(chunk) {
        console.log('stderrChunk', chunk.toString('utf8'))
    }
}).then(()=>{
    ssh.dispose();
});
*/

/*
ssh.execCommand("ping 8.8.8.8 -c 5", {}).then(function(result) {
    console.log('STDOUT: \n' + result.stdout);
    console.log('STDERR: \n' + result.stderr);
});*/

