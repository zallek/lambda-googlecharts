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

## FAQ

#### Why spawning a child process to run `node-googlecharts`?
`node-googlecharts` needs system dependencies that require specific environment variables to run. Unfortunately, AWS Lambda does not allow to define custom env variables for the whole lambda. Indeed, spawning child processes seem to be the recommended way according to amazon. [more info](https://aws.amazon.com/fr/blogs/compute/nodejs-packages-in-lambda/)
