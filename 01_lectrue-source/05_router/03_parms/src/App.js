import { BrowserRouter, Routes , Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Main from "./pages/Main";
import About from "./pages/About";
import Menu from "./pages/Menu";
import MenuDetails from "./pages/MenuDetails";
import MenuSearchResult from "./pages/MenuSearchResult";

function App() {    // url 에 뭘 띠울지 어떤 컴포넌트 쓸지 
  return (
    <BrowserRouter>
      <Routes>  
        <Route path="/" element={<Layout/>}>      
          <Route index element={<Main/>}/>
          <Route path="main" element={<Main/>}/>
          <Route path="about" element={<About/>}/>
          {/* <Route path="menu" element={<Menu/>}/> */}
          <Route path='menu'>
            <Route index element={<Menu/>}/>
            <Route path= ':menuCode' element={<MenuDetails/>}/>
            <Route path= 'search' element={<MenuSearchResult/>} />
          </Route>  
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
