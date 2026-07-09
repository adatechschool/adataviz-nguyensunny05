// const app = document.getElementById("app");
// // https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/parissetransforme/records?limit=20
// const getData = async () => {
//   try {
//     const data = await fetch(
//       "https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/parissetransforme/records?limit=20",
//     );
//     const response = await data.json();
//     return response.results;
//   } catch (error) {
//     console.error(error.message);
//   }
// };

// const printData = async () => {
//   const resultData = await getData();
//   for (let i = 0; i < resultData.length; i++) {
//     const article = document.createElement("article");
//     const h1 = document.createElement("h1");
//     h1.textContent = resultData[i].titre_descriptif;
//     article.appendChild(h1);
//     app.appendChild(article);
//   }
// };
// printData();

// const app = document.getElementById("app");
// // https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/parissetransforme/records?limit=20
// const getData = async () => {
//   try {
//     const data = await fetch(
//       "https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/parissetransforme/records?limit=20",
//     );
//     const response = await data.json();
//     return response.results;
//   } catch (error) {
//     console.error(error.message);
//   }
// };

// const printData = async () => {
//   const resultData = await getData();
//   for (let i = 0; i < resultData.length; i++) {
//     const article = document.createElement("article");
//     article.innerHTML = `
//     <h1>${resultData[i].titre_descriptif}</h1>
//     `;
//     app.appendChild(article);
//   }
// };
// printData();
const parent = document.getElementById('parent');

const donnees = async () => {
  try {
    const reponse = await fetch("https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/liste-des-ehpad/records?limit=20");
    const data = await reponse.json();
    return data.results;
  } catch (erreur) {
    console.error("erreur de chargement:", erreur.message);
  }
};

const printData = async () => {
  const resultData = await donnees();
  for (let i = 0; i < resultData.length; i++) {
    const carte = document.createElement("article");
    const img = document.createElement("img");
    const carteBody = document.createElement("section");
    const h5 = document.createElement("h5");
    const p = document.createElement("p");
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    const button = document.createElement("button");
    img.src = resultData[i].image.url;
    h5.textContent = resultData[i].nom_de_l_ehpad;
    p.textContent = resultData[i].ville;
    li.textContent = resultData[i].adresse
    li2.textContent = resultData[i].code_postal
    li3.textContent = resultData[i].telephone;
    button.textContent = "Voir la fiche →";
    button.onclick = () => {
      // Ouvrir une page détails pour l'EHPAD
    }
    carte.classList.add("card");
    carte.appendChild(img);
    carteBody.classList.add("card-body");
    carteBody.appendChild(h5);
    carteBody.appendChild(li);
    carteBody.appendChild(li2);
    carteBody.appendChild(li3);
    carte.appendChild(carteBody);
    carte.appendChild(button);
    parent.appendChild(carte);
  }
};
console.log(printData());