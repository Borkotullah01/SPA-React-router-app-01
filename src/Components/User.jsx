import { Link } from "react-router-dom";

const User = ({user}) => {
    const {id, name, email} = user;
    return (
        <div className="text-center space-y-3 border-2 border-[dodgerblue] p-8 rounded-xl">
            <h1 className="text-4xl font-extrabold">{id}</h1>
            <h1 className="text-2xl font-bold">{name}</h1>
            <h1 className="text-xl">{email}</h1>
            <div>
                <Link to={`/users/${id}`}><button className="btn btn-info text-white">User Details</button></Link>
            </div>
        </div>
    );
};

export default User;