const MARVEL_ENDPOINT = "https://gateway.marvel.com/v1/public";
const KEY_PUBLIC = "7b1146729234fb030c9da279fb99e951";

class MarvelService {
  async allHeroes(page) {
    const url =
      MARVEL_ENDPOINT +
      "/characters?" +
      this.getParamsUrl() +
      "&offset=" +
      page * 100;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(
        `MarvelService getHeroes failed, HTTP status ${response.status}`
      );
    } else {
      const result = await response.json();
      return result.data.results;
    }
  }

  async searchHeroes(search) {
    const url =
      MARVEL_ENDPOINT +
      "/characters?" +
      this.getParamsUrl() +
      "&nameStartsWith=" +
      search;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(
        `MarvelService getHeroes failed, HTTP status ${response.status}`
      );
    } else {
      const result = await response.json();
      return result.data.results;
    }
  }

  async getHero(heroId) {
    const url =
      MARVEL_ENDPOINT + "/characters/" + heroId + "?" + this.getParamsUrl();
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(
        `MarvelService getHero failed, HTTP status ${response.status}`
      );
    } else {
      const result = await response.json();
      return result.data.results[0];
    }
  }

  async getSeries(heroId) {
    const url =
      MARVEL_ENDPOINT +
      "/characters/" +
      heroId +
      "/series?" +
      this.getParamsUrl();
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(
        `MarvelService getHero failed, HTTP status ${response.status}`
      );
    } else {
      const result = await response.json();
      return result.data.results;
    }
  }

  async getComics(heroId) {
    const url =
      MARVEL_ENDPOINT +
      "/characters/" +
      heroId +
      "/comics?" +
      this.getParamsUrl();
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(
        `MarvelService getHero failed, HTTP status ${response.status}`
      );
    } else {
      const result = await response.json();
      return result.data.results;
    }
  }

  async getStories(heroId) {
    const url =
      MARVEL_ENDPOINT +
      "/characters/" +
      heroId +
      "/stories?" +
      this.getParamsUrl();
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(
        `MarvelService getHero failed, HTTP status ${response.status}`
      );
    } else {
      const result = await response.json();
      return result.data.results;
    }
  }

  async getEvents(heroId) {
    const url =
      MARVEL_ENDPOINT +
      "/characters/" +
      heroId +
      "/events?" +
      this.getParamsUrl();
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(
        `MarvelService getHero failed, HTTP status ${response.status}`
      );
    } else {
      const result = await response.json();
      return result.data.results;
    }
  }

  getParamsUrl() {
    let params =
      "apikey=" +
      KEY_PUBLIC +
      "&hash=fd3518773cd89f9b5110a1773377b8f5&ts=1&limit=100";
    return params;
  }
}

export default new MarvelService();
