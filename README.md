## Getting Started with boilerplate

This project was a blank project with base configuration. You need to run this command for the first time.

```bash
    npm install
```

After installing all the dependencies you can start this project using

```bash
    npm start
```

## Get ready for production

To run deploy this project you need to run the following command

```bash
    npm run build
```

## PWA

To turn on PWA, app must be on production and have PUBLIC_URL set
Then must build the app first to test PWA functionality, using:

```bash
    npm run build
    serve -s build
```
