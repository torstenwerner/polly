const express = require('express');
const app = express();
const http = require('http').Server(app);
const streamifier = require('streamifier');
const mp3 = require('./mp3-polly');

app.get('/audio', function (req, res) {
    res.set('Content-Type', 'audio/mpeg');
    const text = req.query.text || 'Polly will einen Keks.';
    const type = req.query.type || 'text'; // ssml
    const voice = req.query.voice || 'Marlene'; // Hans
    mp3(text, voice, type, function (audio) {
        streamifier.createReadStream(audio).pipe(res);
    });
});

http.listen(3000, function () {
    console.log('listening on localhost:3000');
});
