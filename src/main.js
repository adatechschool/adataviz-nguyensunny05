const parent = document.getElementById("parent");
const btnPlus = document.querySelector(".btn-plus");

const donnees = async () => {
  try {
    const reponse = await fetch(
      "https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/liste-des-ehpad/records?limit=20",
    );
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
    const li = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    const button = document.createElement("button");

    if (resultData[i].image && resultData[i].image.url) {
      img.src = resultData[i].image.url;
    } else {
      img.src = "https://via.placeholder.com/350x200?text=Pas+d'image";
    }

    h5.textContent = resultData[i].nom_de_l_ehpad;
    li.textContent = resultData[i].adresse;
    li2.textContent = resultData[i].code_postal;
    li3.textContent = resultData[i].telephone;
    button.textContent = "Voir la fiche →";
    li2.classList.add("hidden-info");
    li3.classList.add("hidden-info");

    button.onclick = () => {
      if (li2.classList.contains("hidden-info")) {
        li2.classList.remove("hidden-info");
        li3.classList.remove("hidden-info");
        button.textContent = "Masquer les infos ←";
      } else {
        li2.classList.add("hidden-info");
        li3.classList.add("hidden-info");
        button.textContent = "Voir la fiche →";
      }
    };

    carte.classList.add("card");

    if (i > 2) {
      carte.classList.add("hidden-card");
      carte.style.display = "none";
    }

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

btnPlus.addEventListener("click", () => {
  const cartesCachees = document.querySelectorAll(".card.hidden-card");

  for (let i = 0; i < 3 && i < cartesCachees.length; i++) {
    cartesCachees[i].classList.remove("hidden-card");
    cartesCachees[i].style.display = "flex";
  }

  if (document.querySelectorAll(".card.hidden-card").length === 0) {
    btnPlus.style.display = "none";
  }
});

printData();

const inputName = document.querySelectorAll(".search input")[0];
const inputCity = document.querySelectorAll(".search input")[1];
const searchBtn = document.querySelector(".search button");

searchBtn.addEventListener("click", () => {
  const nomRecherche = inputName.value.toLowerCase().trim();
  const villeRecherche = inputCity.value.toLowerCase().trim();
  const cartes = document.querySelectorAll(".card");

  // boucle sur chaque cartes pour verifier si le li et le titre correspondent 
  cartes.forEach((carte) => {
    const nomEhpad = carte.querySelector("h5").textContent.toLowerCase();
    const listeElements = carte.querySelectorAll("li");

    let adresseText = "";
    if (listeElements[0]) {
      adresseText = listeElements[0].textContent.toLowerCase();
    } else {
      adresseText = "";
    }

    let codePostalText = "";
    if (listeElements[1]) {
      codePostalText = listeElements[1].textContent.toLowerCase();
    } else {
      codePostalText = "";
    }

    const correspondNom = nomEhpad.includes(nomRecherche);
    const correspondVille = codePostalText.includes(codePostalRecherche);

    if (correspondNom && correspondVille) {
      carte.style.display = "flex";
    } else {
      carte.style.display = "none";
    }
  });

  if (nomRecherche || codePostalRecherche) {
    btnPlus.style.display = "none";
  } else {
    btnPlus.style.display = "block";
  }
});
