import LikeButton from "./LikeButton";
import Link from "next/link";
const fetchPost = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};
const ListOfPost = async () => {
  const posts = await fetchPost();

  return (
    <section>
      {posts.map((post) => (
        <article key={post.id}>
          <Link href="/post/[id]" as={`/post/${post.id}`}>
            <h2 style={{ color: "#09f" }}>{post.title}</h2>
          </Link>
          <p>{post.body}</p>
          <LikeButton id={post.id} />
        </article>
      ))}
    </section>
  );
};

export default ListOfPost;
