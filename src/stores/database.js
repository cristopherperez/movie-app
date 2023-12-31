import { defineStore } from "pinia";
import axios from "axios";

export const useDatabaseStore = defineStore("database", {
  state: () => ({
    documents: [],
  }),
  actions: {
    async getUrls(searchTerm) {
      try {
        const { data } = await axios.get(
          `https://www.omdbapi.com/?i=tt3896198&apikey=9ff345ba&s=${searchTerm}`
        );
        console.log(data);
        this.documents = data.Search;
      } catch (error) {
        console.log(error);
      } finally {
      }
    },
    async fetchMovieDetails(title) {
      try {
        const encodedTitle = encodeURIComponent(title);
        const { data } = await axios.get(
          `https://www.omdbapi.com/?i=tt3896198&apikey=9ff345ba&t=${encodedTitle}`
        );
        console.log(data);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
