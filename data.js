let requestURl = './libro.json'
let request = new XMLHttpRequest
request.open('GET', requestURl)
request.responseType = 'json'
request.send();

request.onload = function(){
const libro = request.response
console.log(libro)
}

