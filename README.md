# Project name
description
Node Version: v9.11.1
Linting : babel-eslint airbnb

## File Structure

```
├── conf               <- Webpack configurations
│
├── src                <- contains source code
|   |── actions        <- Helpers that pass data to the Dispatcher
|   |── components     <- UI components without logic
|   |── config         <- configs for dev, test, production
|   |── containers     <- UI components with logic
|   |── images         <- images for the site
|   |── reducers       <- functions which handle actions
|   |── sources        <- data sources
|   |── static         <- arbitrary static assets
|   |── stores         <- global app state
|   |── styles         <- global styles
│                         
├── test               <- holds all test
```

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing

install packages with yarn (should take about 3 minutes), Simply run:
```
yarn install    
```
or for node (also about 3 minutes): 
```
npm i     
```

## Tests

run tests with yarn:
```
yarn test
```
or for node: 
```
npm test   
```

## Serving

serve with yarn:
```
yarn start
```
or for node: 
```
npm start   
```