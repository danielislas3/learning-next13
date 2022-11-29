import LikeButton from "./LikeButton";

const fetchPost = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json()
  );
};
const ListOfPost = async () => {
  const posts = await fetchPost();

  return (
    <section>
      {posts.map((post) => (
        <article key={post.id}>
          <h2 style={{ color: "#09f" }}>{post.title}</h2>
          <p>{post.body}</p>
          <LikeButton id={post.id} />
        </article>
      ))}
    </section>
  );
};

export default ListOfPost;
