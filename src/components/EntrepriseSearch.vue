<template>
  <div class="container">
    <h2>Rechecher une entreprise</h2>
    <label for="siret">N° de SIRET</label>
    <div class="d-flex align-items-center">
      <input class="" id="siret" v-model="siret" type="text" placeholder="82178322200044"/>
      <button class="btn btn-secondary m-1" @click="searchEntreprise">Rechercher</button>
    </div>
      <table v-if="entreprise" class="table">
        <thead>
          <tr class="table-primary">
            <th>SIRET</th>
            <th>Raison Sociale</th>
            <th>Ville</th>
            <th>Code Postal</th>
            <th>Adresse</th>
            <th>SIREN</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="align-middle width-auto max-width-140">{{ entreprise.etablissement.siret }}</td>
            <td class="align-middle width-auto " v-if="entreprise.etablissement.uniteLegale.denominationUniteLegale">{{ entreprise.etablissement.uniteLegale.denominationUniteLegale }}</td>
            <td class="align-middle width-auto " v-if="!entreprise.etablissement.uniteLegale.denominationUniteLegale">{{ entreprise.etablissement.uniteLegale.prenomUsuelUniteLegale }} {{ entreprise.etablissement.uniteLegale.nomUniteLegale }}</td>
            <td class="align-middle width-auto ">{{ entreprise.etablissement.adresseEtablissement.libelleCommuneEtablissement }}</td>
            <td class="align-middle width-auto max-width-60">{{ entreprise.etablissement.adresseEtablissement.codePostalEtablissement }}</td>
            <td class="align-middle width-auto ">{{ entreprise.etablissement.adresseEtablissement.numeroVoieEtablissement }} {{ entreprise.etablissement.adresseEtablissement.typeVoieEtablissement }} {{ entreprise.etablissement.adresseEtablissement.libelleVoieEtablissement }}</td>
            <td class="align-middle width-auto max-width-100">{{ entreprise.etablissement.siren }}</td>
            <td class="align-middle width-auto "><button class="btn btn-primary" @click="saveEntreprise">Enregistrer</button></td>
          </tr>
        </tbody>
      </table>      
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import api from '@/services/api';

export default {
  data() {
    return {
      siret: '',
      entreprise: null,
      error: null
    };
  },
  methods: {
    async searchEntreprise() {
      this.error = null;
      this.entreprise = null;

      try {
        const response = await api.searchEntreprise(this.siret);
        this.entreprise = response.data;
      } catch (err) {
        this.error = 'Erreur lors de la récupération des données. Veuillez vérifier le numéro de SIRET.';
      }
    },
    async saveEntreprise() {
      try {
        const data = {
          siret: this.entreprise.etablissement.siret,
          siren: this.entreprise.etablissement.siren,
          raisonSociale: this.entreprise.etablissement.uniteLegale.denominationUniteLegale || `${this.entreprise.etablissement.uniteLegale.prenomUsuelUniteLegale} ${this.entreprise.etablissement.uniteLegale.nomUniteLegale}`,
          ville: this.entreprise.etablissement.adresseEtablissement.libelleCommuneEtablissement,
          codePostal: this.entreprise.etablissement.adresseEtablissement.codePostalEtablissement,
          adresse: `${this.entreprise.etablissement.adresseEtablissement.numeroVoieEtablissement} ${this.entreprise.etablissement.adresseEtablissement.typeVoieEtablissement} ${this.entreprise.etablissement.adresseEtablissement.libelleVoieEtablissement}`
        };

        await api.saveEnreprise(data);
        alert('Entreprise enregistrée avec succès');
      } catch (err) {
        alert('Erreur lors de l\'enregistrement. Veuillez réessayer.');
      }
    }
  }
};
</script>
  