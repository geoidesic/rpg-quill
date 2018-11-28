<template>
  <q-card
    inline
    color="secondary"
    text-color="white"
    dark
    class=" profile"
  >
    <q-card-media overlay-position="right">
      <img class="avatar" src="/assets/Kieran_Alamore-thumb.jpg" />
      <q-card-title slot="overlay">
        {{ characterName }}
        <span slot="subtitle">{{ characterRace }}</span>
      </q-card-title>
    </q-card-media>
    <q-card-title>
      {{ characterClass }}
    </q-card-title>
    <q-card-separator />
    <q-card-main>
      <span class="label-heading">
        Description:
      </span>
      <p>
        {{ characterDescription }}
      </p>
      <q-card-actions>
        <q-btn
          color="primary"
          @click="edit()"
          v-if="!editing"
          >
          Edit
        </q-btn>
        <q-btn
          color="primary"
          @click="exportCharacter()"
          v-if="!exportingCharacter"
          >
          Export
        </q-btn>
        <q-btn
          color="primary"
          @click="importCharacter()"
          v-if="!importingCharacter"
          >
          Import
        </q-btn>
      </q-card-actions>
    </q-card-main>
  </q-card>
</template>

<script>
export default {
  name: 'csProfile',
  data () {
    return {
      editing: false,
      importingCharacter: false,
      exportingCharacter: false,
      characterName: 'Kieran Alamore',
      characterDescription: 'A merchant sailor by trade, Kieran is a silver fox with considerable life experience under his beard... er... belt. Sarieny, the elder Siren, had been an angel once, now cursed to haunt the oceans. She saw something in Kieran that spoke of destiny and chose him to be her arcane champion on a quest to find a lost relic.',
      characterRace: 'Human',
      characterClass: 'Warlock'
    }
  },
  methods: {
    importCharacter () {
      console.log('importCharacter')
      this.editing = false
      this.importingCharacter = true
      this.exportingCharacter = false
    },
    exportCharacter () {
      console.log('exportCharacter')
      this.editing = false
      this.importingCharacter = false
      this.exportingCharacter = true
    },
    edit () {
      console.log('edit')
      this.editing = true
      this.importingCharacter = false
      this.exportingCharacter = false
    }
  }
}
</script>

<style>
.profile {
}
</style>
