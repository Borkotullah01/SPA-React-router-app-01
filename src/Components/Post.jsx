import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Post = ({post}) => {
    const { id, title, body } = post;
    console.log(post);
    return (
        <div className="grid justify-center items-center text-center space-y-3 border-2 border-[dodgerblue] p-8 rounded-xl">
            <h1 className="text-4xl font-extrabold">{id}</h1>
            <h1 className="text-2xl font-bold">{title}</h1>
            <h1 className="text-xl">{body}</h1>
            <div>
                <Link to={`/posts/${id}`}><button className="btn btn-info text-white">Post Details</button></Link>
            </div>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object,
}
export default Post;