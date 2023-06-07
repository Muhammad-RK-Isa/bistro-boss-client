import { Outlet } from "react-router-dom";
import Footer from "../../Pages/Shared/Footer/Footer";

const Main = () => {
    return (
        <section>
            <Outlet />
            <Footer /> 
        </section>
    );
};

export default Main;