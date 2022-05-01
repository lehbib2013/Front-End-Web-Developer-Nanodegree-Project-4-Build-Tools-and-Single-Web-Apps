# Introduction

This repo is for my fourth project in Front End Developper nanodegree Programm at Udacity.
those are topics covered by this project :

- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls


The idea behind this chalenge is to practice learned concepts and technics on a topic of Natural Language Processing.
By providing a url link , the programme will communicate with third part API to analyze symentics and provide results.



## Getting started

Remember that once you clone, you will still need to install everything:

`cd` into your new folder and run:
- `npm install`

## Dependencies

this projects depends on following npm packages :
```
    "@babel/core": "^7.13.15",
    "@babel/plugin-transform-modules-commonjs": "^7.13.8",
    "@babel/preset-env": "^7.13.15",
    "babel-loader": "^8.2.2",
    "body-parser": "^1.19.0",
    "clean-webpack-plugin": "^3.0.0",
    "cors": "^2.8.5",
    "css-loader": "^5.2.1",
    "file-loader": "^6.2.0",
    "html-webpack-plugin": "^3.2.0",
    "jest": "^26.6.3",
    "mini-css-extract-plugin": "^0.8.0",
    "node-fetch": "^2.6.1",
    "node-sass": "^5.0.0",
    "optimize-css-assets-webpack-plugin": "^5.0.3",
    "sass": "^1.32.8",
    "sass-loader": "^10.1.1",
    "style-loader": "^2.0.0",
    "terser-webpack-plugin": "^1.3.0",
    "webpack-dev-server": "^3.11.2",
    "workbox-webpack-plugin": "^4.3.1"
```


###  Environement variables
To communicate with api.meaningcloud.com API  , we stored the key in the the .env variable to protect all configuration variables being published and shared publicly.


## Executing API Fetching

to run the dev server pn port 8080:
```
npm run build-dev
```
to run prdoction server on 8081 :
```
npm run build-prod
```

The app was tested by lunching production server and entering this url blog url:
```
https://www.rand.org/blog/2022/04/the-day-before-the-revolution.html
```

the results are :
```
Form Results:
SUBJECTIVE
No plolarity was provided
NONIRONIC
DISAGREEMENT
Valid URL
```
## Tests
to run test :
```
npm run test
```

## Deploying

the project currently not yet deployed.
