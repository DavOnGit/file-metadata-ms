'use strict';

var express = require('express'),
    fs      = require('fs'),
    multer  = require('multer'),
    app     = express();
    
var storage = multer.memoryStorage()
var upload  = multer(
    {
        storage: storage,
        limits: {
            fileSize: 10240000
        }
    }
)
                
app.set('strict routing', true);
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.set('json spaces', 4);


var type = upload.single('blob');

app.post('/upload', type, function(req,res) {
    
    var sendBack = {
        'Name': req.file.originalname,
        'File size': req.file.size,
        'Type': req.file.mimetype,
        'Encoding': req.file.encoding
    };
    
    res.setHeader('Content-Type', 'application/json');
    res.send(sendBack);
    
});


app.use(function (err, req, res, next) {
    console.log(err); // <-- this should show you the fieldname of the offending file
    console.log(err.stack);
    
    if(err) {
        res.status(400).end('Error: ' + err.message + '\n\nerror code: ' + err.code);
    }
});


app.listen( app.get('port'), () => {
    console.log('listening on port: ' + app.get('port'));
});
