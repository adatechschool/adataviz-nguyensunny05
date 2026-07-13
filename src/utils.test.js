import { describe, test, expect } from 'vitest';
import { filtrerEhpads } from './utils.js';

describe('Tests de la fonction filtrerEhpads', () => {
  
  const nosMaisonsDeRetraite = [
    { nom_de_l_ehpad: "EHPAD Cousin de Mericourt", code_postal: "75019" },
    { nom_de_l_ehpad: "EHPAD Alice Princ", code_postal: "75014" },
    { nom_de_l_ehpad: "EHPAD bombardment-Alquier-Debrousse", code_postal: "75020" }
  ];

  test('retourner toutes les résidences si les filtres sont vides', () => {
    const resultat = filtrerEhpads(nosMaisonsDeRetraite, "", "");
    expect(resultat).toEqual(nosMaisonsDeRetraite);
  });

  test('filtrer par nom seulement', () => {
    const resultat = filtrerEhpads(nosMaisonsDeRetraite, "alice", "");
    expect(resultat.length).toBe(1);
    expect(resultat[0].nom_de_l_ehpad).toBe("EHPAD Alice Princ");
  });

  test('devrait filtrer correctement par code postal', () => {
    const resultat = filtrerEhpads(nosMaisonsDeRetraite, "", "75014");
    expect(resultat.length).toBe(1);
    expect(resultat[0].nom_de_l_ehpad).toBe("EHPAD Alice Princ");
  });

  test('filtrer par nom et par code postal ensemble', () => {
    const resultat = filtrerEhpads(nosMaisonsDeRetraite, "Mericourt", "75019");
    expect(resultat).toEqual([
      { nom_de_l_ehpad: "EHPAD Cousin de Mericourt", code_postal: "75019" }
    ]);
  });

  test(' retourner un tableau vide si aucune résidence ne correspond', () => {
    const resultat = filtrerEhpads(nosMaisonsDeRetraite, "Introuvable", "99999");
    expect(resultat).toEqual([]);
  });
});