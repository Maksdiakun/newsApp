export default class likeServices {
  getALlLiked = () => {
    let posts = localStorage.getItem("liked");
    if (posts) {
      posts = JSON.parse(posts);
    } else {
      posts = {};
    }
    return posts;
  };
  addLiked = (post) => {
    const posts = this.getALlLiked();
    const newsPosts = { ...posts, [post.title]: post };
    localStorage.setItem("liked", JSON.stringify(newsPosts));
    return newsPosts;
  };
  removeLiked = (title) => {
    const posts = this.getALlLiked();
    delete posts[title];
    localStorage.setItem("liked", JSON.stringify(posts));
    return posts;
  };
}
