[![Website](https://img.shields.io/website-up-down-green-red/https/file-metadata-parser.herokuapp.com%2F.svg?maxAge=2592000)](https://file-metadata-parser.herokuapp.com/)
[![StackShare](http://img.shields.io/badge/tech-stack-0690fa.svg?style=flat)](http://stackshare.io/DavOnGit/myown)
[![License](https://img.shields.io/cocoapods/l/AFNetworking.svg)](http://doge.mit-license.org)

# File Metadata Microservice

This simple App ([link](https://file-metadata-parser.herokuapp.com/)) exract metadata from the uploaded file like:

- Name
- Size
- Mime type
- Encoding

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) installed.

```sh
$ git clone https://github.com/DavOnGit/file-metadata-ms.git # or clone your own fork
$ cd timestamp-microservice
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

or

Make sure you have the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```
$ heroku create
$ git push heroku master
$ heroku open
```
