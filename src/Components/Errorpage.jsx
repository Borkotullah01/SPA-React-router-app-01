import { Link } from "react-router-dom";

const Errorpage = () => {
    return (
        <div className="grid justify-center min-h-screen">
            <h1 className='text-center text-7xl font-bold text-blue-800'><span className="text-red-600">404</span> <span className="text-orange-600">opps!!</span> page not found</h1>
            <div className="text-center">
                <Link to={-1}><button className="btn btn-accent">Go Back to Home</button></Link>
            </div>
        </div>
    );
};

export default Errorpage;