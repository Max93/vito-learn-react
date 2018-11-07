Hi folks!
I wan't share with github's friends how to learn react, in a Vito way.
Who is Vito ? Vito is one of my best friend.

Vito is a smart guy and surf around web.

### 1. Vito's question - I need Redux to use React ?

No! Redux is not React, and maybe Redux is not Redux ;) Mr [Pony Foo](https://ponyfoo.com/) recently send some frightful article like :

- [Why I no Longer use Redux with React](https://www.youtube.com/watch?v=pUlwhe-kmog&utm_source=ponyfoo+weekly&utm_medium=email&utm_campaign=137)
- [The Suspense is Killing Redux](https://medium.com/@ryanflorence/the-suspense-is-killing-redux-e888f9692430)

I don't know if this is a conspiracy or fake news. Btw my friend Michele(@doppiam) said :

> Massimo fuck u and React! Start using [unstated](https://github.com/jamiebuilds/unstated).

Vito(@m-otiv) viri soccu poi fare, rape na issue (open an issue) for the next arguments.

### 2. Roman's question - How to submit a form data using fetch method & post

```js
const formData = new FormData(form);

const data = {
    userId: 1
};

formData.forEach((value, key) => {
    data[key] = value;
});

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(json => console.log(json))
```

[example](form-data/form-data.md)

As a caveat - this is a living doc, and will evolve as priorities grow and shift. The *vito-learn-react project* will always be adapting to new vito studies.


## Getting Started

### Requirements

![Docker >= 17.04 ](https://badgen.net/badge/Docker/>=17.04/409be6?icon=docker)

![docker-compose >=1.8.0 ](https://badgen.net/badge/docker-compose/>=1.8/409be6?icon=docker)

### Usage

#### First run

Builds images.
```bash
docker-compose build
```

#### Run

Launches web server
```bash
docker-compose up
```

`open http://localhost` Once the server is up, the root page can be seen on your local machine
