const http = require('http');
const formidable = require('formidable');
const url = require('url');
const fs = require('fs');
const { promises: fsPromises } = require('fs');
 
 
function login(req, res) {
    // load from html/login.html
    //fsPromises.copyFile('html/login.html', 'html/copy.html')
    //.then( () => console.log('copy ไฟล์ได้แล้ว') )
    //.catch( () => console.log('The file could not be copied') );
    fs.readFile('login.html', function(err, data) {
        if (err) throw err;
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}
function form(req, res) {
    fs.readFile('form.html', function(err, data) {
        if (err) throw err;
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}
function upload(req, res) {
    const form = new formidable.IncomingForm();
    let files = [];
    form.on('file', function(field, file) {
        console.log(field, file);
        files.push([field, file])
      })
      .on('end', function() {
        console.log('-> upload done');
        res.writeHead(200, {'content-type': 'text/html'});
        //res.write(`received fields:\n\n ${field}`);
        res.write('Upload done<br/>');
        res.write('<ul>')
        for (let f of files) {
            res.write(`<li>${f[0]} - ${JSON.stringify(f[1])} </li>`);
        }
        res.write('</ul>')
        //res.end(`received files:\n\n ${file}`);
        res.end();
      });
    form.parse(req);
}
http.createServer((req, res) => {
    console.log(`req.url คือ ${req.url}`);
    if (req.url == '/upload/') {
        upload(req, res);
    } else if (req.url == '/login') {
        login(req,res);
    } else if (req.url == '/') {
        form(req, res);
    }
    //res.writeHead(200, {'Content-Type': 'application/json'});
    //res.write("<h1>hello world</h1>");
    //res.write(`${req}`);
    //const q = url.parse(req.url, true).query;
    //res.write(`${JSON.stringify(q)}`)
    //res.write(JSON.stringify(req.headers));
    //res.end();
}).listen(8888);