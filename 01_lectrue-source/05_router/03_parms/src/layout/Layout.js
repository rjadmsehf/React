import {Outlet} from 'react-router-dom'
import Header from '../components/Navbar';
import Navbar from '../components/Header';
function Layout() {

    return(
        <>
            <Header/>
            <Navbar/>
            <Outlet/>
        </>
    );
}

export default Layout;