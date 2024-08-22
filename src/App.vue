<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
  </header>

<nav class="navbar navbar-expand-md navbar-light bg-light">
        <a class="navbar-brand" href="#"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink class="nav-link" to="/" exact-active-class="active">Recherche d'entreprise</RouterLink>

            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/entreprises" exact-active-class="active">Liste des entreprises</RouterLink>

            </li>
          </ul>
        </div>
      </nav>
  <RouterView />
</template>


