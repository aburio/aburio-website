# Abur.io website

This repository contains the source code of my personal website built with Webpack 5 and Bootstrap 5.3.

## Dependencies

- [Handlebars](https://handlebarsjs.com/) - Templating language
- [Bootstrap 5.3](https://getbootstrap.com/docs/5.3/getting-started/introduction/) - Frontend toolkit
- [Webpack 5](https://webpack.js.org/) - Static module bundler
  - [html-bundler-webpack-plugin](https://github.com/webdiscus/html-bundler-webpack-plugin) - Generate static HTML from handlebars template

## Features

- Front-end

  - [Bootstrap and Webpack](https://getbootstrap.com/docs/5.3/getting-started/webpack/)

- Back-end

  - Serverless contact form built with [AWS Lambda](https://aws.amazon.com/fr/lambda/features/) & [Amazon SES](https://aws.amazon.com/fr/ses/)
  - Spam/bot protection using [Google Recaptcha V3](https://developers.google.com/recaptcha/docs/v3)

- Analytics
  - General stats using [Google Analytics](https://analytics.google.com/analytics/web/)

## Hosting

Automatic deployment of the master branch to [www.abur.io](https://www.abur.io) using [AWS Amplify](https://aws.amazon.com/fr/amplify/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

A special thanks goes to [Clement Aceituno](https://github.com/clementAC) (my business partner) for the initiation to the AWS Amplify
