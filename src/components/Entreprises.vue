<template>
    <div>
      <h2>Entreprises</h2>

      <table class="table table-striped">
      <thead>
        <tr class="table-primary">
          <th>ID</th>
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
        <tr v-for="entreprise in entreprises" :key="entreprise.id">
          <td class="align-middle width-auto">{{ entreprise.id }}</td>
          <td class="align-middle width-auto"><input class="max-width-140" v-model="entreprise.siret" /></td>
          <td class="align-middle width-auto"><input v-model="entreprise.raisonSociale" /></td>
          <td class="align-middle width-auto"><input v-model="entreprise.ville" /></td>
          <td class="align-middle width-auto"><input class="max-width-60" v-model="entreprise.cp" /></td>
          <td class="align-middle width-auto"><input v-model="entreprise.adresse" /></td>
          <td class="align-middle width-auto"><input class="max-width-100" v-model="entreprise.siren" /></td>
          <td class="align-middle width-auto">
            <div class="d-flex">
              <button class="btn btn-success m-1" @click="updateEntreprise(entreprise)">Enregistrer</button>
              <button class="btn btn-danger m-1" @click="deleteEntreprise(entreprise.id)">Supprimer</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
</template>
  
<script>
  import api from '@/services/api';
  
  export default {
    data() {
      return {
        entreprises: [],
      };
    },
    created() {
      this.fetchEntreprises();
    },
    methods: {
      fetchEntreprises() {
        api.getEntreprises().then(response => {
          this.entreprises = response.data;
        });
      },
      updateEntreprise(entreprise) {
        api.updateEntreprise(entreprise.id, entreprise).then(() => {
          alert('Entreprise mise à jour avec succès');
        });
      },
      deleteEntreprise(id) {
        api.deleteEntreprise(id).then(() => {
          this.entreprises = this.entreprises.filter(entreprise => entreprise.id !== id);
          alert('Entreprise supprimée avec succès');
        });
      }
    },
  };
</script>