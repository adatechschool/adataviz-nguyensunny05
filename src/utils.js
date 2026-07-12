export const filtrerEhpads= (ehpads, nomRecherche, codePostalRecherche) => {

  const nomRecher = (nomRecherche || "").toLowerCase().trim();
  const codePrecher = (codePostalRecherche || "").toLowerCase().trim();

  return ehpads.filter((ehpad) => {
    const nomEhpad = (ehpad.nom_de_l_ehpad || "").toLowerCase();
    const codePostalEhpad = (ehpad.code_postal || "").toLowerCase();

    const correspondNom = nomEhpad.includes(nomRecher);
    const correspondVille = codePostalEhpad.includes(codePrecher);

    return correspondNom && correspondVille;
  });
};