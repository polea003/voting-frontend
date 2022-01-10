First time, 
1. docker build -t voting-frontend .

After building, only need this command from now on, until adding a file or modifying configuration files.
2. docker run -v ${PWD}:/app -v /app/node_modules -p 8080:8080 --rm voting-frontend

Access at:
http://localhost:8080/ 



<!-- # web-app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/). -->
