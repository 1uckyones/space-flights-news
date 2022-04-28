import axios from "axios";
const ARTICLES_PER_PAGE = 12;

function getArticlesFromPage(page, country) {
  if (country == "all") {
    return axios.get(
      `https://api.spaceflightnewsapi.net/v3/articles?_limit=${ARTICLES_PER_PAGE}&_start=${
        ARTICLES_PER_PAGE * (page - 1)
      }`
    );
  }
  return axios.get(
    `https://api.spaceflightnewsapi.net/v3/articles?_limit=${ARTICLES_PER_PAGE}&_start=${
      ARTICLES_PER_PAGE * (page - 1)
    }&title_contains=${country}`
  );
}

export { getArticlesFromPage };
