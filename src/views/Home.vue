<script setup>
import { ref, onMounted, computed, watch } from "vue";
import { useTVMazeStore } from "../stores/tvmaze";
import ShowBlock from "../components/ShowBlock.vue";

const store = useTVMazeStore();
const shows = computed(() => {
  return store.shows;
});
const searchResult = computed(() => {
  return store.searchResult;
});

const search = ref("");
const genres = ref(["Crime", "Drama", "Tech", "Sport"]);

watch(search, () => {
  store.fetchSearch(search.value);
});

onMounted(() => {
  store.fetchShows();
});
</script>

<template>
  <div class="mx-auto w-80 my-4">
    <input
      class="w-80 h-10 bg-slate-800 p-4"
      type="text"
      placeholder="Search shows"
      v-model="search"
    />
  </div>
  <div class="mx-auto w-max">
    <button
      class="rounded-full bg-slate-800 px-4 py-1 mx-2"
      v-for="genre in genres"
      :key="genre"
      @click="search = genre"
    >
      {{ genre }}
    </button>
  </div>
  <div class="mx-auto w-80 sm:w-max mt-2" v-if="search && searchResult.length">
    Search results for: <b>{{ search }}</b>
  </div>
  <div
    class="mx-auto w-80 sm:w-max mt-2"
    v-else-if="search && !searchResult.length"
  >
    Oops, there's no search results for <b>{{ search }}</b
    >, check these other shows:
  </div>
  <div
    class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7"
  >
    <template v-if="search && searchResult.length">
      <template v-for="item in searchResult" :key="item.id">
        <ShowBlock v-if="item.show.image" :show="item.show" />
      </template>
    </template>
    <template v-else>
      <template v-for="item in shows" :key="item.id">
        <ShowBlock v-if="item.image" :show="item" />
      </template>
    </template>
  </div>
</template>

<style scoped></style>
