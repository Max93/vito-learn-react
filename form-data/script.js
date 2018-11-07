document.getElementById('form').addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const data = {
        userId: 1
    };

    formData.forEach((value, key) => {
         data[key] = value;
    });

    console.log(JSON.stringify(data));

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(json => console.log(json))
});