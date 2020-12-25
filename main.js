// const http = require('http');
// const url = require('url');
// const fs = require('fs');

// function login(req, res) {
//     fs.readFile('html/login.html', functionerr(err, data) {
//         if (err) throw err;
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write(data);
//         return res.end();
//     });
// }

// http.createServer((req, res) => {
//     login(req, res);
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write('<h2 style="color: red;">Hello World</h2>');
//     res.write(`<p>${req}</p>`);
//     console.warn(req.headers.host);
//     console.warn(req.headers['user-agent']);


//     let q = url.parse(req.url, true).query
//     res.write(`${JSON.stringify(q)}`)
//     // console.log(`q.a=${q.a}`);
//     // console.log(`q.b=${q.b * 20}`);
//     res.end();
//     //  http://127.0.0.1:8888/index/query?a=x,b=9
//     //  host = 'localhost' or '127.0.0.1'
// }).listen(8888);