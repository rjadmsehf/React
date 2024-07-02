import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './layouts/layout';
import Main from './pages/Main';
import MyPage from './pages/Mypage';
import Login from './pages/Login';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Main/>}/>
            <Route path='main' element={<Main/>}/>
            <Route path='mypage' element={<MyPage/>}/>
            <Route path='login' element={<Login/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
