# form-data

## install
```bash
$ docker run --rm -v $(pwd):/app -w /app node:latest npm install
```

## build
```bash
$ docker run --rm -v $(pwd):/app -w /app node:latest npm run build
```

## serve
```bash
$ docker run --rm -v $(pwd):/app -p 8000:8000 -w /app python:latest python -m http.server 8000
 ```

## use

Thanks to [jsonplaceholder](https://github.com/typicode/jsonplaceholder) you can create a fake Article by *POST REQUEST* using the form.

![gif 1](resources/1.gif)