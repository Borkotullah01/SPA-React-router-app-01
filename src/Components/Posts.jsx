import { useLoaderData } from "react-router-dom";
import Post from "./Post";

const Posts = () => {
    const posts = useLoaderData();
    console.log(posts);
    return (
        <div>
            <h1 className="text-center text-4xl">Total post : {posts.length}</h1>
            <div className="grid gap-4 justify-between grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10">
                {
                    posts.map(post=><Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;