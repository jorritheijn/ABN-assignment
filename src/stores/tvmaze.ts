import { defineStore } from "pinia";
import axios from "axios";

export const useTVMazeStore = defineStore("tvmaze", {
  state: () => ({
    shows: [],
    searchResult: [],
    show: {},
    cast: [],
    episodes: [],
  }),
  getters: {},
  actions: {
    async fetchShows() {
      try {
        const result = await axios.get("https://api.tvmaze.com/shows");
        this.shows = result.data;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchShow(id: any) {
      try {
        const result = await axios.get("https://api.tvmaze.com/shows/" + id);
        this.show = result.data;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchCast(id: any) {
      try {
        const result = await axios.get(
          "https://api.tvmaze.com/shows/" + id + "/cast"
        );
        this.cast = result.data;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchEpisodes(id: any) {
      try {
        const result = await axios.get(
          "https://api.tvmaze.com/shows/" + id + "/episodes"
        );
        this.episodes = result.data;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchSearch(query: string) {
      try {
        const result = await axios.get(
          "https://api.tvmaze.com/search/shows?q=" + query
        );
        this.searchResult = result.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
