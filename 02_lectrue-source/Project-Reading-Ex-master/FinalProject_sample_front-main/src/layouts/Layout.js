import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import LayoutCSS from "./Layout.module.css";

function Layout() {

    return (
        <>
            <Header/>
            <Navbar/>
            <main className={ LayoutCSS.main }>
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
}
//형이 도박중독이에요~
export default Layout;