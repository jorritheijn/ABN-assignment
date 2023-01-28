<script setup>
const props = defineProps(["show"]);
</script>

<template>
  <router-link
    :to="'/' + show.id"
    v-if="show.image"
    :key="show.id"
    class="mx-auto my-4 show"
  >
    <img :src="show.image.medium" />
    <div class="overlay py-4">
      <div class="text-xl pb-2">{{ show.name }}</div>
      <div v-if="show.rating.average">Rating: {{ show.rating.average }}</div>

      <div v-if="show.genres.length">
        Genres:
        <span v-for="(genre, i) in show.genres" :key="genre">
          {{ genre }}
          <span v-if="i != show.genres.length - 1">- </span>
        </span>
      </div>
      <div class="text-sm pt-2" v-html="show.summary"></div>
    </div>
  </router-link>
</template>

<style scoped>
.show {
  position: relative;
  overflow: hidden;
}

.overlay {
  position: absolute;
  top: 0;
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  transition: 0.5s ease;
  opacity: 0;
  text-align: center;
}

.show:hover .overlay {
  opacity: 1;
}
</style>
