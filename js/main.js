//Generate a random image of a food when recommendation is requested
let user = prompt("What is your name?", "Your Name")

if (user !== null) {
  document.querySelector('p').innerHTML = `Hi, ${user}! 
  Not sure what you want to eat again? 
  Let me make a recommendation!`
}

document.querySelector('button').addEventListener('click', getFood)

let url = ""

function getFood(){

  fetch("https://foodish-api.herokuapp.com/api/")
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    url = data.image
    console.log(data.image)
    document.querySelector('img').src = data.image

    let newUrl = url.split('images/')[1]
    let foodName = newUrl.split('/')
    console.log(foodName[0])
    
    document.querySelector('span').innerHTML = `${foodName[0].toLocaleUpperCase()}`
  })
  .catch(err => {
      console.log(`error ${err}`)
  });

}



