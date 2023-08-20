const http = require('http');
const { exec } = require('child_process');

function sleep() {
    return new Promise((resolve, reject) => {
        exec(`rundll32.exe powrprof.dll,SetSuspendState 0,1,0`, (error, stdout, stderr) => {
            if (error) {
                console.log(error)
                reject(error);
            } else {
                resolve();
            }
        });
    });
}

const server = http.createServer(async (req, res) => {
    if (req.url === '/sleep') {
        try {
            sleep();

            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('OK!');
        } catch (error) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Failed to sleep');
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server listening on port 3000');
});
