import axios from "axios";

export const getData = async (sortBy = 'publishedAt', search = 'all') => {
  try {
    const response = await axios(
      `https://newsapi.org/v2/everything?qInTitle=${search}&sortBy=${sortBy}&apiKey=c3411292270a4096af555e137d70063b`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
export const getCategoryPosT = async (category) => {
  try {
    const response = await axios(
      `https://newsapi.org/v2/top-headlines?category=${category ? category : 'general'}&apiKey=c3411292270a4096af555e137d70063b`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
export async function postComment(id, params) {
  try {
    let res = await axios.post(`https://news-app-9b6cf.firebaseio.com/comments/${id}.json`, params);
    return res
  } catch (error) {
    console.error("comment", error.message);
  }
}
export const getComments = async (id) => {
  const url = `https://news-app-9b6cf.firebaseio.com/comments/${id}.json`;
  console.log(url)
  try {
    const response = await axios(`https://news-app-9b6cf.firebaseio.com/comments/${id}.json`
    );
    return response.data;
  } catch (error) {
    console.error("comment", error.message);
  }
}
