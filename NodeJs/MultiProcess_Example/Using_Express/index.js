'use strict'

var cluster = require('cluster');

// A example for restar workers
function restarWorkers() {
    var pid, workersId = [];

    // We get the pid of each worker
    for(pid in cluster.workers){
        workersId.push(pid);
    }

    // Kill one by one worker
    workersId.forEach((pid) => {
        cluster.workers[pid].send({
            type: 'shutdown',
            from: 'master'
        });

        setTimeout(() => {
            // Check if still alive, if still, force shutdown
            if(cluster.workers[pid]){
                cluster.workers[pid].kill('SIGKILL');
            }
        }, 5000);
    });
}

// If the master process it's alive
if (cluster.isMaster) {
    // Get the qty of cpu of the server
    var numWorkes = require('os').cpus().length;

    console.log('Master cluster is setting up ' + numWorkes + " workers. . .");

    // For each cpu, we create one worker
    for (var i = 0; i < numWorkes; i++) {
        cluster.fork();
    }

    // When each worker it's online, que send a little message
    cluster.on('online', (worker) => {
        console.log('Worker ' + worker.process.pid + " is online");
    });

    // When each worker it's dying, que send a little message
    cluster.on("exit", (worker, code, signal) => {
        console.log("Worker " + worker.process.id + " died with code " + code + ", and signal " + signal);
        console.log("Starting new worker");
        cluster.fork();
    });

    // A event when a message is come from process to master process
    cluster.on('message', (message) => {
        console.log(message);
    });

    // An inversal, when a message come from the master
    process.on('message', (message) => {
        if (message.type === 'shutdown') {
            process.exit(0);
        } else {
            console.log(message);
        }
    });
} else {
    var app = require('express')();
    app.all('/*', (req, res) => {
        res.send('process ' + process.pid + " says hello!").end();
    });

    var server = app.listen(3000, () => {
        console.log('App listening on port 3000!. All by the process ' + process.pid + " what is listening to all incoming request");

        // To send a message from the process to the master
        // To to it from master to process, just do it the same from cluster
        process.send({
            type: 'task example',
            from: process.pid,
            data: {
                message: "Hello master, I'm the process " + process.pid
            }
        });
    });
    
}