# What for
This repository will scrape a website publishing manga chapter releases on a weekly basis and send me a text on a google chat to tell me when the chapter is out.

# How to use

### Install `node_modules`
```
npm install
```

### Launch cron
```
node index.js
```

### Launch one shot
This script will enable you to run locally the script without the cron. You should provide an env variable for the chapter you aime to fetch.
```
node index.js
```