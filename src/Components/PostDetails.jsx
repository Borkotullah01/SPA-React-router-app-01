import { Link, useLoaderData, useParams } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {postId} = useParams();
    const { id, title, body } = post;
    console.log(postId);
    return (
        <div>
            <div className="text-center space-y-3 border-2 border-[dodgerblue] p-8 my-8 rounded-xl">
                <h1 className="text-4xl font-extrabold">{id}</h1>
                <h1 className="text-2xl font-bold">{title}</h1>
                <h1 className="text-xl">{body}</h1>
                <div>
                    <Link to={-1}><button className="btn btn-info text-white">Go Back</button></Link>
                    <Link to={'/'}><button className="btn btn-info text-white">Go Back</button></Link>
                </div>
            </div>
        </div>
    );
};

export default PostDetails;