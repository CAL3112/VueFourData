<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
  </header>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
        <RouterLink class="nav-link" to="/" exact-active-class="active">Recherche d'entreprise</RouterLink>
        <RouterLink class="nav-link" to="/entreprises" exact-active-class="active">Liste des entreprises</RouterLink>
      </div>
    </div>
  </div>
</nav>

  <RouterView />
</template>


