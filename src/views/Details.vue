<script setup>
import { ref, onMounted, computed } from "vue";
import { useTVMazeStore } from "../stores/tvmaze";
import { useRoute } from "vue-router";

const store = useTVMazeStore();
const route = useRoute();
const show = computed(() => {
  return store.show;
});
const cast = computed(() => {
  return store.cast;
});
const episodes = computed(() => {
  return store.episodes;
});
onMounted(() => {
  store.fetchShow(route.params.id);
  store.fetchCast(route.params.id);
  store.fetchEpisodes(route.params.id);
});
</script>

<template>
  <div>
    <div class="my-4 mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 mw-1300">
      <img :src="show.image?.original" />
      <div>
        <div class="text-2xl">{{ show.name }}</div>
        <div v-if="show.rating?.average">
          <b>Rating:</b> {{ show.rating.average }}
        </div>
        <div v-if="show.genres?.length">
          <b>Genres:</b>
          <span v-for="(genre, i) in show.genres" :key="genre">
            {{ genre }}
            <span v-if="i != show.genres.length - 1">- </span>
          </span>
        </div>
        <div v-if="show.network?.name">
          <b>Network:</b> {{ show.network.name }}
        </div>
        <div v-if="show.premiered">
          <b>Release date:</b> {{ show.premiered }}
        </div>
        <div v-if="cast.length" class="showCast">
          <b>Cast: </b>
          <div v-for="member in cast" :key="member.person.id">
            {{ member.person.name }} as {{ member.character.name }}
          </div>
        </div>
      </div>
      <div>
        <b>Summary </b>
        <div v-html="show.summary"></div>
      </div>
    </div>
    <div
      class="pb-2 mx-auto gap-4 grid grid-flow-col auto-cols-max overflow-x-auto mw-1300"
    >
      <div v-for="episode in episodes" :key="episode.id">
        <img :src="episode.image?.medium" />
        {{ episode.season }}x{{ episode.number }}. {{ episode.name }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.mw-1300 {
  max-width: 1300px;
}
.showCast {
  max-height: 400px;
  overflow: auto;
}
</style>
