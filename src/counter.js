// export function setupCounter(element) {
//   let counter = 0
//   const setCounter = (count) => {
//     counter = count
//     element.innerHTML = `Count is ${counter}`
//   }
//   element.addEventListener('click', () => setCounter(counter + 1))
//   setCounter(0)
// }

// const afficherAvecDelai = (message,delai) => {
//   setTimeout(() => {
//     console.log(message);
//   },delai)
// }

// afficherAvecDelai("caca",500)
// afficherAvecDelai("pipi",1000)
// afficherAvecDelai("pété",1500)

// const attendre = (ms) => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Terminé"), ms)
//   })
// }

// attendre(1000).then(message => console.log(message))

// attendre (1000)
// .then(valeur => console.log(valeur));


fetch("https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/liste-des-ehpad/records?limit=20")
.then((data) => data.json())
.then((res) => console.log(res)).catch((error) => console.error( errror))