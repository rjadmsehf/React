import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

/* 
    Outlet : react-router-dom 에서 지원하는 기능으로 부모인 Layout 컴포넌트가 렌더링 되는 순간
           : 자식 경로의 컴포넌트를 바꿔치기해서 렌더링 할 수 있다.
*/           
function Layout(){

    return(
        <>
        <Header/>
        <Navbar/>  
        <Outlet/>
        </>
    );

}

export default Layout;