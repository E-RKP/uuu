let requestURl = './libro.json'
let request = new XMLHttpRequest
request.open('GET', requestURl)
request.responseType = 'json'
request.send();

request.onload = function(){
const libro = request.response
console.log(libro)
}

const numerino = document.getElementById('ok')
const numerone = document.getElementById('numerone')
const buttondimi = document.getElementById('dimi')
const buttonagg = document.getElementById('agg')
let counterm = 0
let counterBIG = 0




function diminuisci(){
  counterm++;
  counterBIG--;

  if (counterBIG<0){
    counterBIG=0
  }

  return{
    counterBIG,
    counterm
  }
}

buttondimi.addEventListener('click', ()=>{
  diminuisci();
  numerino.innerHTML = counterm,
  numerone.innerHTML = counterBIG
})

buttonagg.onclick = function(){
  counterBIG++;
  counterm++;

  numerino.innerHTML = counterm
  numerone.innerHTML = counterBIG
}

