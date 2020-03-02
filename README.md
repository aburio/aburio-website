# Abur.io website

This repository contain the source code of my personal static website build using Webpack 4, Bootstrap 4.4 and the AWS Amplify cli.

## Build With

* [Bootstrap 4.4](https://getbootstrap.com/docs/4.4/getting-started/introduction/) - Front-end framework
* [Webpack 4](https://webpack.js.org/) - Static module bundler
* [AWS Amplify](https://aws.amazon.com/fr/amplify/) - AWS cloud tool chain

## Features

* Front-end
  * Bootstrap CSS compiled with [Responsive Font Size](https://getbootstrap.com/docs/4.4/content/typography/#responsive-font-sizes)
  * Lazy loading imgage & video content using [Lozad JS](https://apoorv.pro/lozad.js/)

* Back-end
  * Serverless contact form build with [AWS Lambda](https://aws.amazon.com/fr/lambda/features/) & [Amazon SES](https://aws.amazon.com/fr/ses/)
  * Spam/bot detection using [Google Recaptcha V3](https://developers.google.com/recaptcha/docs/v3)

* Analytics
  * General stats using [Google Analytics](https://analytics.google.com/analytics/web/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* A special thanks goes to [Clement Aceituno](https://github.com/clementAC) (my business partner) for the initiation to the AWS Amplify
* A usefull article about building a static website using Webpack [Let's get started with Webpack 4](https://hackernoon.com/lets-start-with-webpack-4-91a0f1dba02e)