# Sample web form for AWS polly

It synthesizes german speech from a text typed into a web form. See http://cloud.torsten-werner.info/ for a sample.

## npm

- npm install
- set environment variables AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY
- npm start
- navigate to http://localhost:3000

## docker

- docker build -t polly .
- docker run -d -p 80:3000 -e AWS_ACCESS_KEY_ID=... -e AWS_SECRET_ACCESS_KEY=... --name polly polly
- navigate to your docker host
