import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Home = () => {
    const navigation = useNavigation();
    const location = useLocation();
    console.log(location);
    return (
        <div className="w-10/12 mx-auto">
            <Navbar></Navbar>
            <div>
            {
                navigation.state === "loading" ? <div className="grid justify-center items-center"><span className="w-20 loading loading-dots text-info"></span></div> : <Outlet></Outlet>
            }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;