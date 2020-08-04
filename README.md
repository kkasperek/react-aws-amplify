# React App with AWS
Create and host a simple web application with authentication using AWS Amplify, React, and GraphQL. 
> See the entire AWS Amplify tutorial for building a React Application [here](https://aws.amazon.com/getting-started/hands-on/build-react-app-amplify-graphql/).


## The Stack

- [AWS Amplify](https://docs.aws.amazon.com/amplify/index.html) - Provides a Git based CI/CD workflow for building, deploying, and hosting single page applications. 
- [Amplify CLI](https://docs.aws.amazon.com/cli/latest/reference/amplify/index.html) – Allows you to create, manage, and remove AWS services directly from your terminal.
- [Amplify Libraries](https://docs.amplify.aws/lib/q/platform/js) – Allow direct interactions with AWS backend services from a web or mobile application. 
    > For scaffolding end-to-end authentication flow see [Amplify UI Component Library](https://docs.amplify.aws/guides/authentication/custom-auth-flow/q/platform/js)
- [Amazon Cognito](https://docs.aws.amazon.com/cognito/index.html) - A managed user identity service.
- [React.js](https://reactjs.org/) - Web application framework using JavaScript.
- [Git](https://git-scm.com/) – Open source version control that maintains and updates relationships between files and directories, versions, and changes to the files.
- [GraphQL](https://graphql.org/) - A query language and server-side API implementation based on a typed representation of your application.
- [Amazon DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html) - A fully managed NoSQL database.

<br/>

# Getting Started

## Prerequisites
- AWS account
- See more [here]()

Install the Amplify CLI using the Command Prompt
```
npm install -g @aws-amplify/cli
```

---

## Installation
Clone this repo to your local machine. 
```shell
$ git clone https://github.com/kkasperek/react-aws-amplify.git
```
Using [yarn]() or [npm](), run the following command in the root of the project to install dependencies. 
```shell
$ yarn install or npm install
```

---

### Running Locally
To start the dev environment locally: 
```shell
$ yarn start or npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

> The page will reload if you make edits. You will also see any lint errors in the console.

<br/>

# Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

# License
[MIT](https://choosealicense.com/licenses/mit/)
