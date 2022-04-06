const giveMeanewJoke = document.querySelector("button")
const joke = document.getElementById("joke")
const firstName = document.getElementById("fieldName")
const lastName = document.getElementById("fieldLastName")
const products = document.getElementById("products")

// Here we are getting random joke from Chuck Norris api. We also apply name from our text fields.
giveMeanewJoke.addEventListener('click',()=>{
   // fetch("https://api.chucknorris.io/jokes/random").then(response => response.json()).then(data => joke.innerHTML = data.value).catch(err=> console.log(err.message))
   betterCallToApi()
})
const betterCallToApi = async () =>{
    try{
    const req = await fetch(`https://api.chucknorris.io/jokes/random?name=${firstName.value}${lastName.value}`)
    const data = await req.json()
    joke.innerHTML = data.value
    }catch(err){
        console.log(err.message)
    }
}














