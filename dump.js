const mp3 = require('./mp3-polly');
const streamifier = require('streamifier');
const fs = require('fs');

const text = 'Welcome!';
const type = 'text'; // ssml
const voice = 'Joey';
mp3(text, voice, type, function (audio) {
    const out = fs.createWriteStream('welcome.mp3');
    streamifier.createReadStream(audio).pipe(out);
});
