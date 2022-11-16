import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import GotoTop from "./GotoTop";
import { useGlobalContext } from "../GlobalContext";
import Footer from '../components/Footer';

const SharedLayout = () => {
    return <main>
        <Header />
        <Sidebar />
        <Navbar />
        <GotoTop />
        <Outlet />
        <Footer />
    </main>
}

export default SharedLayout;