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
          `http://www.omdbapi.com/?i=tt3896198&apikey=9ff345ba&s=${searchTerm}`
        );
        console.log(data);
        this.documents = data.Search;
      } catch (error) {
        console.log(error);
      } finally {
      }
    },
  },
});
