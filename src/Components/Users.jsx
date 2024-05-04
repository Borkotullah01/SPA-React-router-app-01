import { useLoaderData } from "react-router-dom";
import User from "./User";

const Users = () => {
    const users = useLoaderData();
    console.log(users);
    return (
        <div>
            <h1 className="text-center text-4xl">Total user : {users.length}</h1>
            <div className="grid gap-4 justify-between grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10">
                {
                    users.map(user=><User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;