import axios from "axios";

export const getData = async (
  sortBy = "publishedAt",
  search = "all",
  sources
) => {
  const url = `https://newsapi.org/v2/everything?language=en&qInTitle=${search}&sortBy=${sortBy}${
    sources && sources.length ? `&sources=${[...sources]}` : ""
  }&apiKey=c3411292270a4096af555e137d70063b`;
  try {
    const response = await axios(url);
    return response;
  } catch (error) {
    console.error(error);
  }
};
export const getCategoryPosT = async (category) => {
  try {
    const response = await axios(
      `https://newsapi.org/v2/top-headlines?language=en&country=us&category=${
        category ? category : "general"
      }&apiKey=c3411292270a4096af555e137d70063b`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export const getSources = async () => {
  try {
    const response = await axios(
      `https://newsapi.org/v2/sources?country=us&apiKey=c3411292270a4096af555e137d70063b`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
export async function postComment(id, params) {
  try {
    let res = await axios.post(
      `https://news-app-9b6cf.firebaseio.com/comments/${id}.json`,
      params
    );
    return res;
  } catch (error) {
    console.error("comment", error.message);
  }
}
export const getComments = async (id) => {
  try {
    const response = await axios(
      `https://news-app-9b6cf.firebaseio.com/comments/${id}.json`
    );
    return response.data;
  } catch (error) {
    console.error("comment", error.message);
  }
};
