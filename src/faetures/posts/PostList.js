import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";

const PostList = () => {
    const post = useSelector(selectAllPosts)

    const renderedPosts = post.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
        </article>
    ))

    return (
        <section>
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    )
}

export default PostList