import { useEffect, useState } from "react";
import { getMenuList } from '../api/MenuAPI';
import MenuItem from "../components/MenuItem";
import boxStyle from './Menu.module.css'; 
import { useNavigate } from "react-router-dom";
import { searchMenu } from "../api/MenuAPI"; 
// 쿼리스트링으로 작성한 url 요청을 도와줄 수 있는 hooks 

function Menu() {

    const [menuList , setmenuList] = useState([]);
    const [searchValue , setSearchValue] =useState('');
    const navigate = useNavigate();

    useEffect(() => {
        console.log(getMenuList());
        setmenuList(getMenuList());

    },[])

    const onChangeHandler = (e) => {
        setSearchValue(e.target.value)
        console.log(e.target.value)
        setmenuList(searchMenu(e.target.value));
    }
    // const onClickHandler = () => {
    //     /*
    //         검색 버튼을 누르면 퀴리스트링 형태로 검색어를 전달할 수 있게 만듦
    //         useNavigate 훅을 이용해서 링크를 이동시킬 수 있다. 
    //     */    

    //     navigate(`/menu/search?menuName=${searchValue}`)
    // }

    useEffect(() => {

        /*
            쿼리스트링 방식으로 menuName 이라는 key 로 넘어온 검색어를 
            바탕으로 해당 메뉴의 이름과 매칭되는 검색 결과 객체를 반환받는다. 
        */
        setmenuList(searchMenu(searchValue));
    }, []);
    
    return(
        <>
            {searchMenu? 
            <div>
            <h1>판매 메뉴 목록</h1>
            <div>
                <input type="search" name="menuName" onChange={onChangeHandler}/>
                {/* <button onClick={ onClickHandler }>메뉴이름 검색</button> */}
            </div>
            <div className = {boxStyle.MenuBox}>
                {menuList.map(menu => <MenuItem key={menu.menuCode} menu={menu}/>)}
            </div>

            </div>
            :
                <div className={boxStyle.MenuBox}>
                    {menuList.map(menu => <MenuItem key={menu.menuCode} menu={menu}/>)}
                </div>}
        </>
    );
}

export default Menu;