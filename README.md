# Google Chart generation for Lambda

Based on [serverless](http://www.serverless.com).


## Requirements

- Node.js > 4.0
- [Serverless](http://docs.serverless.com/docs/installing-serverless)


## Install

Initializes a new Serverless project. [more info](http://docs.serverless.com/docs/project-init)
```SH
serverless project init -c true
```

Install project dependencies
```SH
npm install
```


## Run functions locally
```
serverless function run generate-svg
```

## Deploy your functions and endpoints:
```
serverless dash deploy
```
