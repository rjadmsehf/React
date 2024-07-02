import { useState, useEffect } from "react";
import MenuItem from "../components/MenuItem";
import boxStyle from'./Menu.module.css';
import {useSearchParams} from 'react-router-dom'; // 쿼리스트링 방식으로 넘어오는 값 
import { searchMenu } from "../api/MenuAPI"; 

function MenuSearchResult() {

    const [menuList , setmenuList] = useState([]);

    const [SearchParam] = useSearchParams();

    const searchMenuName = SearchParam.get('menuName'); 

    useEffect(() => {

        /*
            쿼리스트링 방식으로 menuName 이라는 key 로 넘어온 검색어를 
            바탕으로 해당 메뉴의 이름과 매칭되는 검색 결과 객체를 반환받는다. 
        */
        setmenuList(searchMenu(searchMenuName));
    }, []);

    return(
        <>
            <h1>메뉴 검색 결과</h1>
            <div className={boxStyle.MenuBox}>
                {menuList.map(menu => <MenuItem key={menu.menuCode} menu={menu}/>)}
            </div>
        </>
    );
}

export default MenuSearchResult;