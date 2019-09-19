const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

xhr.onload = function () {
    console.log(xhr.response)
}

xhr.send();